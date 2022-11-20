import * as React from 'react'
import ContactForm, { ContactFormValues } from './Components/ContactForm';
import Results from './Components/Results';

const Main: React.FunctionComponent = (): JSX.Element => {

  const [contactValues, setContactValues]: any = React.useState()

  const onSubmit = (values: ContactFormValues) => {
    setContactValues(values)
  }

  return (
    <main className='w-100 container' data-testid="main">
      <div className='col-sm-12 col-lg-6 m-auto'>
        <ContactForm onSubmit={onSubmit} />
        <Results values={contactValues}/>
      </div>
    </main>
  )
}

export default Main