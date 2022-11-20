import * as React from 'react'

export interface EmailProps {
  value?: string
}

const Email = React.forwardRef((props: EmailProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div>
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" required ref={ref} />
      <div id="emailHelp" className="form-text">Please enter a valid email address</div>
    </div>
  )
})

export default Email