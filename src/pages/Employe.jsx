import React from 'react'
import { useParams } from 'react-router'

export default function Employe() {
    const { id } = useParams()
  return (
    <div className="px-4 py-2">Employe n°{id}</div>
  )
}
