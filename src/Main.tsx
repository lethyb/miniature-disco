import * as React from 'react'
import ContactForm, { ContactFormValues } from './Components/ContactForm';
import Results from './Components/Results';

type StatefulType<T> = [T, React.Dispatch<React.SetStateAction<T>>]

const Main: React.FunctionComponent = (): JSX.Element => {

  const [contactValues, setContactValues]: StatefulType<ContactFormValues | undefined> = React.useState()
  const [submissionDate, setSubmissionDate]: StatefulType<Date | undefined> = React.useState()

  React.useEffect(() => {
    setSubmissionDate(new Date())
  }, [contactValues])

  const onSubmit = (values: ContactFormValues) => {
    setContactValues(values)
  }

  return (
    <main className='w-100 container' data-testid="main">
      <div className='col-sm-12 col-lg-6 m-auto'>
        <ContactForm onSubmit={onSubmit} />
        <Results values={contactValues} submissionDate={submissionDate}/>
      </div>
    </main>
  )
}

export default Main