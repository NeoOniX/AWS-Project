import React from 'react'
import { useParams } from 'react-router'

export default function Delivery() {
    const { id } = useParams()
  return (
    <div className="px-4 py-2">Livraison n°{id}</div>
  )
}
