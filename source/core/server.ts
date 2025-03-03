import { instance } from './configs'

const PORT = process.env.PORT

export const server = instance.listen(PORT)

server.addListener("listening", () => {
    console.log(`⚡ Listening at PORT ${PORT}!`);
})

server.addListener("close", () => {
    console.log(`🎈 Closing PORT ${PORT}!`);
})