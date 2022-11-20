import * as React from "react"
import Email from "../../Components/Email"
import { render, screen, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup()
})

describe("Email Component", () => {

    render(<Email />)
    const email = screen.getByTestId("email")

    test("Email should render", () => {
        expect(email).toBeInTheDocument()
    })

    test("Email should include a label", () => {
        expect(email.querySelector('label')).not.toBeNull()
    })

    describe("Email should include an email input", () => {
        const input = email.querySelector('input')

        test("The input should not be null", () => expect(input).not.toBeNull())
        test("The input type should be 'email'", () => expect(input?.getAttribute('type')).toStrictEqual('email'))
    })
})