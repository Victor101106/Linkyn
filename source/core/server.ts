import { instance } from './configs'

const PORT = process.env.PORT

instance.listen(PORT, () => {
    console.log(`⚡ Listening at PORT ${PORT}!`);
})