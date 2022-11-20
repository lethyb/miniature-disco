import * as React from 'react'
import Animals, { AnimalsValues } from './Animals'
import Colour from './Colour'
import Email from './Email'
import Password from './Password'
import TigerType from './TigerType'

export interface ContactFormValues {
  email: string
  password: string
  colour: string
  animals: AnimalsValues
  tigerType?: string
}

interface ContactFormProps {
  values?: ContactFormValues
  onSubmit: (event: any) => void
}

function ContactForm(props: ContactFormProps) {

  const [isTigerOptionChecked, setIsTigerOptionChecked] = React.useState(false)
  const [animals, setAnimals] = React.useState({})

  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)
  const colourRef = React.useRef<HTMLSelectElement>(null)
  const tigerTypeRef = React.useRef<HTMLInputElement>(null)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const values: Partial<ContactFormValues> = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      colour: colourRef.current?.value,
      animals,
      tigerType: tigerTypeRef.current?.value,
    }

    props.onSubmit(values)
  }

  return (
    <div className='bg-light my-3 p-3 border'>
      <h2>Contact Form</h2>
      <form className="row g-3 needs-validation" onSubmit={handleSubmit}>

        <div className="col-sm-4">
          <Email ref={emailRef} />
        </div>

        <div className="col-sm-4">
          <Password ref={passwordRef} />
        </div>

        <div className="col-sm-4">
          <Colour ref={colourRef} />
        </div>

        <div className="col-12">
          <Animals isTigerOptionChecked={setIsTigerOptionChecked} onChange={setAnimals} values={animals}/>
        </div>

        <div className='col-12'>
          <TigerType ref={tigerTypeRef} hidden={!isTigerOptionChecked}/>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default ContactForm