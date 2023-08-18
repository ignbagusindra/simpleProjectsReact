import React, { useState } from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button'


const CounterApp = () => {
    const [count,setCount] = useState(0)

    const handleIncrement = () => {
      setCount(count + 1)
    }

    const handleDecrement = () => {
      setCount(count - 1)
    }

  return (
    <div className='containerX'>
      <div className="row">
    <h3>CounterApp</h3>
    <div >
        <div>
            <p>{count}</p>
        </div>
        <button onClick={handleIncrement} className="btnMarg">+</button>
        <button onClick={handleDecrement} className="btnMarg">-</button>
        <Button className='btn btn-success btnMarg'>Test Button</Button>
    </div>
    </div>
    </div>
  )
}

export default CounterApp