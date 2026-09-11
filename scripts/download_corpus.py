#!/usr/bin/env python3
"""Download the 102 best-paper PDFs listed in knowledge/corpus-manifest.tsv
and (re)create the knowledge/corpus symlink.

Usage:  python3 scripts/download_corpus.py [--only CONFYEAR ...]
Files land in ./best-papers-2021-2026/ (gitignored). Already-existing valid
PDFs are skipped, so the script is resumable.
"""
import os, sys, time, subprocess, urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEST = os.path.join(ROOT, "best-papers-2021-2026")
MANIFEST = os.path.join(ROOT, "knowledge", "corpus-manifest.tsv")
SYMLINK = os.path.join(ROOT, "knowledge", "corpus")

def is_pdf(path):
    try:
        return os.path.getsize(path) > 10 * 1024 and open(path, "rb").read(5) == b"%PDF-"
    except OSError:
        return False

def fetch(url, dest, tries=4):
    for i in range(tries):
        r = subprocess.run(["curl", "-sL", "--max-time", "180", "--retry", "2",
                            "-A", "Mozilla/5.0", url, "-o", dest], capture_output=True)
        if r.returncode == 0 and is_pdf(dest):
            return True
        time.sleep(2 * (i + 1))
    try:
        os.remove(dest)
    except OSError:
        pass
    return False

def main():
    only = set(sys.argv[1:])
    os.makedirs(DEST, exist_ok=True)
    rows = []
    for line in open(MANIFEST):
        if line.startswith("#"):
            continue
        conf, year, title, fn, url, st = line.rstrip("\n").split("\t")
        rows.append((conf, year, title, fn, url))
    if only:
        rows = [r for r in rows if f"{r[0]}{r[1]}" in only]
    ok = fail = skip = 0
    fails = []
    for conf, year, title, fn, url in rows:
        dest = os.path.join(DEST, fn)
        if os.path.exists(dest) and is_pdf(dest):
            skip += 1
            continue
        if not url:
            print(f"NO SOURCE | {fn}"); fail += 1; fails.append(fn); continue
        u = url if "arxiv.org" not in url else urllib.parse.quote(url, safe=":/")
        if fetch(u, dest):
            ok += 1
            print(f"OK  | {fn}")
        else:
            fail += 1
            fails.append(fn)
            print(f"FAIL| {fn} | {url}")
        time.sleep(1.0)
    # (re)create symlink
    if not os.path.lexists(SYMLINK):
        os.symlink(os.path.relpath(DEST, os.path.dirname(SYMLINK)), SYMLINK)
        print(f"symlink created: knowledge/corpus -> {os.path.relpath(DEST, os.path.dirname(SYMLINK))}")
    print(f"\ndone: {ok} downloaded, {skip} already present, {fail} failed")
    if fails:
        print("failed files:")
        for f in fails:
            print("  -", f)

if __name__ == "__main__":
    main()
