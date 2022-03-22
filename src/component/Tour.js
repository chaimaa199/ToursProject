import React from 'react'
import {useState} from 'react'
const Tour = ({id,image,name,info, price,removeTour}) => {
  const[readMore,setReadMore]=useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <div className="footer">
              <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
      </div>    
          <p>
            {readMore ?info:`${info.substring(0,200)}...`}
            <button className='btn' onClick={()=>setReadMore(!readMore)}>
              {readMore?'Show less':'Read More'}
            </button>
         </p>
         <button className='remove-btn' onClick={()=>removeTour(id)}>Not Interested</button>
      </div>

         
      
   </article>
  )
}

export default Tour