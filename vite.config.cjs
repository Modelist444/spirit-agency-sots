const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        allowedHosts: [
            "contradictorily-unerodent-many.ngrok-free.dev",
            ".ngrok-free.dev",
            ".ngrok.io"
        ]
    },
    build: {
        sourcemap: false
    }
})
