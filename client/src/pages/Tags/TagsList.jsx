import React from 'react'
import './Tags.css'


const TagsList = ({tag}) => {
  return (
    <div className='tag'>
        <h5>{tag.tagname}</h5>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagsList