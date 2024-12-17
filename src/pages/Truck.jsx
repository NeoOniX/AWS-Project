import React from 'react'
import { useParams } from 'react-router'

export default function Truck() {
  const { id } = useParams()

  const [trucks, setTrucks] = React.useState([])
  const [truck, setTruck] = React.useState({model: {S: 'Not found'}, capacity: {N: '0'}})
  
    React.useEffect(() => {
      fetch('https://emiwrg5h6f.execute-api.eu-central-1.amazonaws.com/prod/trucks')
        .then(response => response.json())
        .then(data => setTrucks(data))
    }, [id])

  React.useEffect(() => {
    if (trucks.length === 0) return

    let newTruck = trucks.find(truck => truck.TruckID.S === id)

    if (newTruck) {
      setTruck(newTruck)
    }
  }, [trucks, id])

  return (
    <div className="px-4 py-2 flex flex-col">
      <h2 className="text-xl font-bold">Modèle : {truck.model.S}</h2>
      <p className="text-gray-600">Capacité : {truck.capacity.N}m³</p>
    </div>
  )
}
