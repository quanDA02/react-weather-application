type Props = {
    icon : string,
    alt : string
}

export default function Icon({icon,alt}: Props) {
  return (
    <img className="size-8"
        src={icon}
        alt={alt}
    />
  )
}