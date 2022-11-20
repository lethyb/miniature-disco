import * as React from 'react'

export interface TigerTypeProps {
  value?: string
  hidden: boolean
}

const TigerType = (props: TigerTypeProps) => {

  return (
    props.hidden ? null :
      <>
        <label htmlFor="tiger-type" className="form-label">Tiger type</label>
        <input type="text" className="form-control" id="tiger-type" required />
      </>
  )
}

export default TigerType