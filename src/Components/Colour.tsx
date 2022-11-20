import * as React from 'react'

export interface ColourProps {
  value?: string
}

const Colour = (props: ColourProps) => {
  return (
    <>
      <label htmlFor="colour" className="form-label">Colour</label>
      <select className="form-select" id="colour" required>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
        <option value='red'>Red</option>
        <option value='black'>Black</option>
        <option value='brown'>Brown</option>
      </select>
    </>
  )
}

export default Colour
