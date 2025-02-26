import { instance } from './configs/instance'

const PORT = 3000

instance.listen(PORT, () => {
    console.log(`⚡ Listening at PORT ${PORT}!`);
})