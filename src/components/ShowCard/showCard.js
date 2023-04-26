import React from 'react'

export default function showCard(props) {
  return (
    <div className='main-div'>
<image src={props.image}/>
      <div className='content-div'>
        <h2>{props.name}</h2>
        <h3>{props.categories}</h3>
        <p>{props.quantity}</p>
      </div>
    </div>
  );
}
