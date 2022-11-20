import * as React from 'react'
import Colour from './Colour'
import Email from './Email'
import Password from './Password'
import TigerType from './TigerType'

export interface ContactFormValues {
  email: string
  password: string
  colour: string
  animals: any
  tigerType?: string
}

interface ContactFormProps {
  values?: ContactFormValues
  onSubmit: (event: any) => void
}

function ContactForm(props: ContactFormProps) {

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const values: Partial<ContactFormValues> = {}

    props.onSubmit(values)
  }

  return (
    <div className='bg-light my-3 p-3 border'>
      <h2>Contact Form</h2>
      <form className="row g-3 needs-validation" onSubmit={handleSubmit}>

        <div className="col-sm-4">
          <Email />
        </div>

        <div className="col-sm-4">
          <Password />
        </div>

        <div className="col-sm-4">
          <Colour />
        </div>

        <div className="col-12">
          Animals : TODO
        </div>

        <div className='col-12'>
          <TigerType hidden={false}/>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default ContactForm