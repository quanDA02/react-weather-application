import { MapContainer,TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { Coords } from '../schemas/coords'
type Props = {
  coords : Coords,
  setCoords : React.Dispatch<React.SetStateAction<Coords>>
}


export default function Map({coords, setCoords}: Props) {
  const {lat,lon} = coords
  return (
   <MapContainer 
    center={[lat, lon]} 
    zoom={5} 
    style={{width: "500px", height: "500px"}}
   >
        <Click setCoords={setCoords}/>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}/>
    </MapContainer>
  )
}

function Click({setCoords} : {setCoords : React.Dispatch<React.SetStateAction<Coords>>}){
  const map = useMap()
  map.on('click',(e)=>{
    const {lat,lng} = e.latlng
    map.panTo([lat,lng])
    setCoords({lat:lat,lon:lng})
  })
  return null
}