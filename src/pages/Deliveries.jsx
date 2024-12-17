import React from 'react'

export default function Deliveries() {
  const [deliveries, setDeliveries] = React.useState([])
  
    React.useEffect(() => {
      fetch('https://emiwrg5h6f.execute-api.eu-central-1.amazonaws.com/prod/deliveries')
        .then(response => response.json())
        .then(data => setDeliveries(data))
    }, [])
  
    return (
      <div className="px-4 py-2 flex flex-col">
        {deliveries.map((delivery, index) => (
          <a href={`/deliveries/${delivery.DeliveryID.S}`} key={index} className="p-4 my-2 bg-gray-100 rounded-md">
            <h2 className="text-xl font-bold">Livraison du : {delivery.deliveryDate.S}</h2>
            <p className="text-gray-600">À destination de : {delivery.destination.S}</p>
          </a>
        ))}
      </div>
    )
}
