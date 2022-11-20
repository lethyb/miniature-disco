import * as React from 'react'

export interface PasswordProps {
  value?: string
}

const MIN_LENGTH = 9

const Password = (props: PasswordProps) => {
  return (
    <>
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" required minLength={MIN_LENGTH} />
      <div id="passwordHelp" className="form-text">Your password must be longer than {MIN_LENGTH - 1} characters</div>
    </>
  )
}

export default Password