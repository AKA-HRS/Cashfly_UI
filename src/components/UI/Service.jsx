import React from 'react'

export function Service({ title, description, image }) {
  return (
    <div className="flex items-start mb-6">
      <img src={image} alt={title} className="w-20 bg-transparent rounded-full flex justify-center items-center h-20 mr-4" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
