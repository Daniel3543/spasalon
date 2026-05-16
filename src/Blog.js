import React from 'react';
import { blog } from './baza'; 

export default function Blog() {
  return (
    <div className='Blog x'>
        <div className="box fcs">
            <h3>About Us</h3>
            <div className="all">
                {
                blog.map((elem, index) => {
                    return (
                        <div className='fcs' style={{gap : "20px", background : "white", padding : "30px 60px", borderRadius : "10px 10px" }}>
                            <img src={elem.name} alt="" />
                            <h4>{elem.ph}</h4>
                            <p>{elem.op}</p>
                            <p>{elem.data}</p>
                            <button>{elem.btn}</button>
                        </div>
                    )
                })
                }
            </div>    
        </div>
    </div>
  )
}
