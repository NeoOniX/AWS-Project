import React from 'react'

export default function Employes() {
  const [employes, setEmployes] = React.useState([])
  
    React.useEffect(() => {
      fetch('https://emiwrg5h6f.execute-api.eu-central-1.amazonaws.com/prod/employes')
        .then(response => response.json())
        .then(data => setEmployes(data))
    }, [])
  
    return (
      <div className="px-4 py-2 flex flex-col">
        {employes.map((employe, index) => (
          <a href={`/employes/${employe.EmployeeID.S}`} key={index} className="p-4 my-2 bg-gray-100 rounded-md">
            <h2 className="text-xl font-bold">Nom : {employe.name.S}</h2>
            <p className="text-gray-600">Poste : {employe.position.S}</p>
          </a>
        ))}
      </div>
    )
}
