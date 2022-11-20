import * as React from 'react'

const Main: React.FunctionComponent = (): JSX.Element => {

  const [contactValues, setContactValues]: any = React.useState()

  const onSubmit = (values: any) => {
    setContactValues(values)
  }

  return (
    <main className='w-100 container' data-testid="main">
      <div className='col-sm-12 col-lg-6 m-auto'>

      </div>
    </main>
  )
}

export default Main