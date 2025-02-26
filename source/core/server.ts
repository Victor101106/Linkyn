import { instance } from './configs/instance'

const PORT = Number(process.env.PORT)

instance.listen(PORT, () => {
    console.log(`⚡ Listening at PORT ${PORT}!`);
})