import * as React from 'react'

export interface PasswordProps {
  value?: string
}

const MIN_LENGTH = 9

const Password = React.forwardRef((props: PasswordProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div data-testid="password">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" required minLength={MIN_LENGTH} ref={ref} />
      <div id="passwordHelp" className="form-text">Your password must be longer than {MIN_LENGTH - 1} characters</div>
    </div>
  )
})

export default Password