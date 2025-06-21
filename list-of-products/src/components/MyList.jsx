import React, { useState } from 'react'



export default function MyList({currentList}) {
    const [list, setList] = useState(currentList);
  return (
    <>
        {list.map((item) => {
            return <li key={item.id}>{item.title} - {item.price}</li>
        })}
    </>
  )
}
