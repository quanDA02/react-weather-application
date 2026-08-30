import z from "zod";
import { weatherSchema } from "./weatherSchema";

const forecastSchema = weatherSchema.shape.forecast.shape.forecastday

export type Forecast = z.infer<typeof forecastSchema>