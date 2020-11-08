import React from 'react'

const Card = (props) => {
  console.log(props, 'props')
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>get props</h5>
        <h5 className='card-subtitle mb-2 text-muted'>get props</h5>
        <p className='card-text'> pass text herree</p>
      </div>
    </div>
  )
}

export default Card