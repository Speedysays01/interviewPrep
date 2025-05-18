import React from 'react'
import Agent from '@/components/Agent'

const page = () => {
  return (
    <div>
        <h3>interview generation</h3>
        <Agent userName="you" userId='user1' type="generate"/>
    </div>
  )
}

export default page