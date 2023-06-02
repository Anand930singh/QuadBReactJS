import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function Home_buttons(props) {
    const buttonStyle={
        backgroundColor:' #cc00ff',
        color:'#FFFFFF',
        display:'flex',
        width:'9.5rem',
        fontWeight:'600',
        justifyContent:'space-around',
        fontSize:'1.5rem' ,
        verticalAlign: 'middle',
        borderRadius:'0.375rem',
        height:'3.4rem',
    }


  return (
    <button type='submit' style={buttonStyle}><div style={{marginTop:'5px'}}>{props.data}</div></button>
  )
}

export default Home_buttons