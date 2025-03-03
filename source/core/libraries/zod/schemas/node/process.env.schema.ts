import { z } from 'zod'

export const ProcessEnvSchema = z.object({
    PORT: z.coerce.number()
})

export type ProcessEnvType = z.infer<
    typeof ProcessEnvSchema
>