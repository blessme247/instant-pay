import React from 'react'
import { Link } from 'react-router-dom'

const Decription = ({text, linkText, linkURL, target}) => {
  return (
    <div className='description'>
        <p><span>{text}</span> <Link className='description-link' to={linkURL} target={target}>{linkText}</Link></p>
    </div>
  )
}

export default Decription