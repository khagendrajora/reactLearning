import React, { useState } from 'react'

export const IncrementDecrement = () => {
    const [num, setNum] = useState(1)

    // const IncrementFunc=()=>{
    //     setNum(num+1)
    // }
    const DecrementFunc = () => {
        if (num > 1) {
            setNum(num - 1)
        }

    }
    return (
        <>
            <h2 className='text-success'>{num}</h2>
            {/* <button className='btn btn-primary ' onClick={IncrementFunc}>Increment</button> */}
            <button className='btn btn-primary ' onClick={() => setNum(num + 1)}>Increment</button>
            {
                num>1 &&
                <button className='btn btn-primary ' onClick={DecrementFunc}>Decrement</button>
            }

            &nbsp;&nbsp;&nbsp;

        </>
    )
}

