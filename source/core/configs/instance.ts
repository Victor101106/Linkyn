import { createServer } from 'node:http'

export const instance = createServer((request, response) => {
    return response.writeHead(200).end('Hello, World!')
})