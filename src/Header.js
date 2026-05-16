import React from 'react'

export default function Header() {
    const arr = ["Home", "About us", "Products", "Reviews", "Blog", "Contact us"]

  return (
    <header className='x'>
        <div className="box sb">
            <p>Logo</p>
            <ul className='x'> {arr.map((e, i) => <li key={i}>{e}</li> )} </ul>
        </div>
    </header>
  )
}
