import * as React from 'react'

export interface AnimalsValues {
  [key: string]: string
}

export interface AnimalsProps {
  values?: AnimalsValues
  onChange: (values: AnimalsValues) => void
  isTigerOptionChecked: (checked: boolean) => void
}

const Animals = (props: AnimalsProps) => {

  const values: {} = props.values ? { ...props.values } : {}
  const handleChange = (event: any) => {
    props.onChange(values)
  }

  return (
    <>
      <label>Animals</label>

      <div onChange={handleChange} className='d-inline'>
        <div className="form-check d-block p-0 ps-sm-1 d-sm-inline-block">
          <input type="checkbox" className="btn-check" id="bear" autoComplete="off" name='Bear' />
          <label className="btn btn-outline-secondary" htmlFor="bear">Bear</label>
        </div>

        <div className="form-check d-block p-0 ps-sm-1 d-sm-inline-block">
          <input type="checkbox" className="btn-check" id="tiger" autoComplete="off" name='Tiger' />
          <label className="btn btn-outline-secondary" htmlFor="tiger">Tiger</label>
        </div>

        <div className="form-check d-block p-0 ps-sm-1 d-sm-inline-block">
          <input type="checkbox" className="btn-check" id="snake" autoComplete="off" name='Snake' />
          <label className="btn btn-outline-secondary" htmlFor="snake">Snake</label>
        </div>

        <div className="form-check d-block p-0 ps-sm-1 d-sm-inline-block">
          <input type="checkbox" className="btn-check" id="donkey" autoComplete="off" name='Donkey' />
          <label className="btn btn-outline-secondary" htmlFor="donkey">Donkey</label>
        </div>
      </div>
    </>
  )
}

export default Animals

