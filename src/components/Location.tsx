import type { Location } from "../schemas/locationSchema"
import Card from "./cards/Card"

type Props = {
    location : Location
}

export default function Location({location}: Props) {
  return (
    <Card title="Location">{JSON.stringify(location)}</Card>
  )
}