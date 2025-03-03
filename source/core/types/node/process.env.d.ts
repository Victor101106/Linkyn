import { ProcessEnvType } from '../../libraries/zod/schemas/node'

export declare global {
    namespace NodeJS {
        type ProcessEnv = ProcessEnvType
    }
}