import { z } from "zod";


const GroupInsertValidation = z.object({
    body: z.object({
        name: z.string().nonempty(),
    })
})

const GroupUpdateValidation = z.object({
    body: z.object({
        name: z.string().nonempty(),
    })
})


export const GroupValidation = {
    GroupInsertValidation,
    GroupUpdateValidation
}