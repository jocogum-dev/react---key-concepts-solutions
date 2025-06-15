import React from 'react'

export default function Goal({goalTitle, goalContent}) {
  return (
    <>
        <h2>
            {goalTitle}
        </h2>
        <p>{goalContent}</p>
    </>
  )
}
