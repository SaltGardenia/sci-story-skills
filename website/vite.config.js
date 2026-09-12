import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project pages deploy to https://saltgardenia.github.io/sci-story-skills/
export default defineConfig({
  plugins: [react()],
  base: '/sci-story-skills/',
})
