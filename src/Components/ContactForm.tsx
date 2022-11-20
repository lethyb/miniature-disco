import * as React from 'react'

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
      <form className="row g-3 needs-validation" onSubmit={handleSubmit}></form>
    </div>
  )
}

export default ContactForm