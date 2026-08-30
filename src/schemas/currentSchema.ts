import z from "zod";
import { weatherSchema } from "./weatherSchema";

const currentSchema = weatherSchema.shape.current

export type CurrentWeather = z.infer<typeof currentSchema> 