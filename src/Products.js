import React from 'react';
import { krem } from './baza';

export default function Products() {
  return (
    <div className='Products x'>
        <div className="box fcs">
            <h3>Products</h3>
            <div className="all">
                {
                    krem.map((elem, index) => {
                        return (
                            <div className='fcs' key={index} style={{gap : "10px"}}>
                                <div className='img'><img src={elem.name} alt="" /></div>
                                <h4>{elem.ph}</h4>
                                <p>{elem.op}</p>
                                <h5>{elem.price}$</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
