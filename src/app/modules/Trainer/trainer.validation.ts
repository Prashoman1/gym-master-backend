import { z } from "zod";

const TrainerInsertValidation = z.object({
  body: z.object({
    user: z.string().nonempty("User is required."), // ObjectId as a string
    email: z
      .string()
      .email("Invalid email address.")
      .nonempty("Email is required."),
    fullName: z.object({
      firstName: z.string().nonempty("First name is required."),
      lastName: z.string().nonempty("Last name is required."),
    }),
    experience: z.number().min(0, "Experience must be a positive number."),
    presentAddress: z.object({
      city: z.string().nonempty("City is required."),
      state: z.string().nonempty("State is required."),
      country: z.string().nonempty("Country is required."),
    }),
    permanentAddress: z.object({
      city: z.string().nonempty("City is required."),
      state: z.string().nonempty("State is required."),
      country: z.string().nonempty("Country is required."),
    }),
    trainerId: z.string().nonempty("Trainer ID is required."),
    punchId: z.string().nonempty("Punch ID is required."),
    phone: z.string().nonempty("Phone number is required."),
    photo: z.string().nonempty("Photo URL is required."),
    specialization: z.string().nonempty("Specialization is required."), // ObjectId as a string
    status: z.number().optional().default(1),
    availability: z.enum(["Morning", "Evening", "Night"], {
      required_error: "Availability is required.",
    }),
  }),
});


export const TrainerValidation = {
    TrainerInsertValidation
}