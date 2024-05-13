import React from 'react'

const Card = ({ name, image }) => {
  return (
    <div
      style={{
        margin: '20px',
        width: '300px',
        boxShadow: '5px 5px 10px #ccc',
      }}
    >
      <h4 style={{ color: 'green' }}>Пицца.Inc</h4>
      <div>{name}</div>
      <div style={{ marginTop: '20px' }}>
        <img src={image} alt='' width={200} height={200} />
      </div>
    </div>
  )
}

export default Card
