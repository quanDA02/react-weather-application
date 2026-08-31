
type Props = {
    title: string,
    number :number
    unit?: string
}

export default function WeatherCondition({title,number,unit}: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
        <p>{title}</p>
        <p>{number} {unit}</p>
    </div>
  )
}