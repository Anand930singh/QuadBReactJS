import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div className="genere">
        {
            props.data.map((item,index)=>{
                return <div>{item}</div>
            })
        }
    </div>
  );
}

export default Button