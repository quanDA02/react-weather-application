import z from "zod";
import { weatherSchema } from "./weatherSchema";

const locationSchema = weatherSchema.shape.location
export type Location = z.infer<typeof locationSchema>