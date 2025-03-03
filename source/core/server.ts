import { instance } from './configs'

const PORT = Number(process.env.PORT)

instance.listen(PORT, () => {
    console.log(`⚡ Listening at PORT ${PORT}!`);
})