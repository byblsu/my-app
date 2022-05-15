import React, { useEffect, useState } from 'react'

 const Ac = () => {
     
    const [count, setCount] = useState(1000)
    console.log(1)
    useEffect(() => {
        console.log(2)
        return () => {
            console.log(3)
        }
    })
    console.log(4)
  return (
    <>
    { console.log(5) }
      {count}
      <br></br>
      <button onClick={() =>{ setCount(count + 1)}}> change count </button>
    </>
  )
}

export default Ac
