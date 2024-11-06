/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  script: {
    build: "tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  }
}

