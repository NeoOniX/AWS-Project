import React from 'react'

export default function Trucks() {
  const [trucks, setTrucks] = React.useState([])

  React.useEffect(() => {
    fetch('https://emiwrg5h6f.execute-api.eu-central-1.amazonaws.com/prod/trucks')
      .then(response => response.json())
      .then(data => setTrucks(data))
  }, [])

  return (
    <div className="px-4 py-2 flex flex-col">
      {trucks.map((truck, index) => (
        <a href={`/trucks/${truck.TruckID.S}`} key={index} className="p-4 my-2 bg-gray-100 rounded-md">
          <h2 className="text-xl font-bold">Modèle : {truck.model.S}</h2>
          <p className="text-gray-600">Capacité : {truck.capacity.N}m³</p>
        </a>
      ))}
    </div>
  )
}
