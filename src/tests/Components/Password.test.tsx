import * as React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom'
import Password from "../../Components/Password"

afterEach(() => {
    cleanup()
})

describe("Password Component", () => {

    render(<Password />)
    const password = screen.getByTestId("password")

    test("Password should render", () => {
        expect(password).toBeInTheDocument()
    })

    test("Password should include a label", () => {
        expect(password.querySelector('label')).not.toBeNull()
    })

    describe("Password should include an input", () => {
        const input = password.querySelector('input')

        test("The input should not be null", () => expect(input).not.toBeNull())
        test("The input type should be 'password'", () => expect(input?.getAttribute('type')).toStrictEqual('password'))
        test("The input should allow a minimun of 9 characters'", () => expect(input?.getAttribute('minLength')).toStrictEqual('9'))
    })
})