import { ProcessEnvSchema } from '../libraries/zod/schemas/node'

export const environment = ProcessEnvSchema.parse(process.env)