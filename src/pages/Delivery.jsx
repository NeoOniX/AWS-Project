import React from "react";
import { useParams } from "react-router";

export default function Delivery() {
  const { id } = useParams();

  const [deliveries, setDeliveries] = React.useState([]);
  const [delivery, setDelivery] = React.useState({
    deliveryDate: { S: "Not found" },
    destination: { S: "None" },
  });

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/deliveries")
      .then((response) => response.json())
      .then((data) => setDeliveries(data));
  }, [id]);

  React.useEffect(() => {
    if (deliveries.length === 0) return;

    let newDelivery = deliveries.find(
      (delivery) => delivery.DeliveryID.S === id
    );

    if (newDelivery) {
      setDelivery(newDelivery);
    }
  }, [deliveries, id]);

  return (
    <div className="px-4 py-2 flex flex-col">
      <h2 className="text-xl font-bold">
        Livraison du : {delivery.deliveryDate.S}
      </h2>
      <p className="text-gray-600">
        À destination de : {delivery.destination.S}
      </p>
    </div>
  );
}
