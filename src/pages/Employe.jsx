import React from "react";
import { useParams } from "react-router";

export default function Employe() {
  const { id } = useParams();

  const [employes, setEmployes] = React.useState([]);
  const [employe, setEmploye] = React.useState({
    name: { S: "Not found" },
    position: { S: "None" },
  });

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/employes")
      .then((response) => response.json())
      .then((data) => setEmployes(data));
  }, [id]);

  React.useEffect(() => {
    if (employes.length === 0) return;

    let newEmploye = employes.find((employe) => employe.EmployeeID.S === id);

    if (newEmploye) {
      setEmploye(newEmploye);
    }
  }, [employes, id]);

  return (
    <div className="px-4 py-2 flex flex-col">
      <h2 className="text-xl font-bold">Nom : {employe.name.S}</h2>
      <p className="text-gray-600">Poste : {employe.position.S}</p>
    </div>
  );
}
