import React from 'react'

const Card = ({children, title}) => {
  return (
    <div class="card" style={{
      width: '550px',
      margin: '20px auto',
      padding: "20px"
    }}>
  <div class="card-body">
      <h1>{title}</h1>
    {children}
  </div>
</div>
  )
}

export default Card