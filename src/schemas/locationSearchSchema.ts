import { z } from "zod";

export const locationSearchSchema = z.object({
  id: z.number(),
  name: z.string(),
  region: z.string(),
  country: z.string(),
  lat: z.number(),
  lon: z.number(),
  url: z.string(),
}).partial();

export const locationListSchema = z.array(locationSearchSchema);
export type locationHistory  = z.infer<typeof locationSearchSchema>