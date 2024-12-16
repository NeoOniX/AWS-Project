import React from 'react'
import { useParams } from 'react-router'

export default function Truck() {
  const { id } = useParams()
  return (
    <div className="px-4 py-2">Truck n°{id}</div>
  )
}
