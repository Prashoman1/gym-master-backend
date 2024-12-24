import { z } from "zod";


const SpecializationInsertValidation = z.object({
    body: z.object({
        name: z.string().nonempty(),
        description: z.string().min(3).max(255).nonempty(),
    }),
})

const SpecializationUpdateValidation = z.object({
    body: z.object({
        name: z.string().nonempty(),
        description: z.string().min(3).max(255).nonempty(),
    }),
})

export const SpecializationValidation = {
    SpecializationInsertValidation,
    SpecializationUpdateValidation
}