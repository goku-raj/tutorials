import React from 'react'

const NewComp = (props) => {
    console.log(`render count`, props.newCount)
  return (
    <div>
      <h1>under New component: {props.newCount}</h1>
    </div>
  )
}

export default React.memo(NewComp)
