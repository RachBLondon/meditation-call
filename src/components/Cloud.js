import React from 'react'

const Cloud = props => {
  return (
    <div
      className='cloud-container'
      style={{ top: props.top +'px', left: props.left + 'px', opacity : props.opacity , zIndex : '1' }}
    >
      <div style={{ opacity : props.opacity, zIndex : '1'}} className='cloud-1'></div>
      <div style={{ opacity : props.opacity, zIndex : '1'}}  className='cloud-2'></div>
    </div>
  )
}

export default Cloud
