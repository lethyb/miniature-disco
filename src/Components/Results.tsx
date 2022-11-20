import * as React from 'react'
import { ContactFormValues } from './ContactForm'

export interface ResultsProps {
  values?: ContactFormValues
  submissionDate?: Date
}

const Results = (props: ResultsProps) => {

  return !props.values || !props.submissionDate
    ? null
    : (
      <div className="alert alert-primary" role="alert">

        <span className="position-absolute top-0 end-0 p-3">
          <span className='badge rounded-pill bg-primary bg-opacity-25 fs-6'>
            {props.submissionDate.toLocaleString()}
          </span>
        </span>

        <h2>Your results</h2>

        <ul className="list-group bg-light border border-dark">

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="me-auto">
              <div className="fw-bold">Email</div>
              <span className='ps-2'>{props.values.email}</span>
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="me-auto">
              <div className="fw-bold">Password</div>
              <span className='ps-2'>{props.values.password}</span>
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="me-auto">
              <div className="fw-bold">Colour</div>
              <span className='ps-2'>{props.values.colour}</span>
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="me-auto">
              <div className="fw-bold">Animals</div>
              <ul className='ps-3'>
                {Object.values(props.values.animals).map((animal: string) => <li key={animal}>{animal}</li>)}
              </ul>
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="me-auto">
              <div className="fw-bold">Tiger type</div>
              <span className='ps-2'>{props.values.tigerType || 'N/A'}</span>
            </div>
          </li>

        </ul>
      </div>
    )
}

export default Results