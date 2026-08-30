import type { CurrentWeather } from '../schemas/currentSchema'
import Card from './cards/Card'

type Props = {
    current : CurrentWeather
}

export default function Current({current}: Props) {
  return (
    <Card title="Current weather">{JSON.stringify(current)}</Card>
  )
}