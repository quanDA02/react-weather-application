import z from "zod";
import { weatherSchema } from "./weatherSchema";

const hourlySchema = weatherSchema.shape.forecast.shape.forecastday.element.shape.hour

export type Hourly = z.infer<typeof hourlySchema>