import * as React from 'react'

export interface ColourProps {
  value?: string
}

const Colour = React.forwardRef((props: ColourProps, ref: React.Ref<HTMLSelectElement>) => {
  return (
    <>
      <label htmlFor="colour" className="form-label">Colour</label>
      <select className="form-select" id="colour" required ref={ref}>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
        <option value='red'>Red</option>
        <option value='black'>Black</option>
        <option value='brown'>Brown</option>
      </select>
    </>
  )
})

export default Colour
