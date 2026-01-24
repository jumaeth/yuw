import {z} from "zod";

export const domainFormSchema = z.object({
  domain: z
    .string()
    .min(1, { message: "Bitte eine Domain angeben" })
    .regex(/^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, {
      message: "Bitte eine gültige Domain angeben"
    })
})

export type domainFormData = z.infer<typeof domainFormSchema>