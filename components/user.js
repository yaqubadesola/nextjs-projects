import React from 'react'

function User({ user }) {
  return (
    <div>
        <h3>{user.name} - <span style={{color:"blue"}}>{user.email}</span></h3>
      
    </div>
  )
}

export default User