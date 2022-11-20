import * as React from 'react'

export interface EmailProps {
  value?: string
}

const Email = (props: EmailProps) => {
  return (
    <>
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" required />
      <div id="emailHelp" className="form-text">Please enter a valid email address</div>
    </>
  )
}

export default Email