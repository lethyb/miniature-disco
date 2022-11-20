import * as React from 'react'

const BEAR_VALUE: string = 'bear'
const TIGER_VALUE: string = 'tiger'
const SNAKE_VALUE: string = 'snake'
const DONKEY_VALUE: string = 'donkey'

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

    if (event.target.checked) {
      Object.assign(values, { [event.target.id]: event.target.name })
      if (event.target.id === TIGER_VALUE) {
        props.isTigerOptionChecked(true)
      }
    } else {
      delete values[event.target.id]
      if (event.target.id === TIGER_VALUE) {
        props.isTigerOptionChecked(false)
      }
    }

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

