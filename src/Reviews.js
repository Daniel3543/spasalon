import React from 'react';
import { rev } from './baza';

export default function Reviews() {
  return (
    <div className='Reviews x'>
        <div className="box fcs">
            <h3>Reviews</h3>
            <div className="all">
                {
                    rev.map((elem, index) => {
                        return (
                            <div key={index} style={{ gap : "30px", background : "white", borderRadius : "50px 0px 50px 0px", padding : "30px 30px" }}>
                                <img src={elem.name} alt="" />
                                <h4>{elem.ph}</h4>
                                <p>{elem.op}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
