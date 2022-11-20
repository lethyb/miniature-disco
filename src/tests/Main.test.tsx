import * as React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom'
import Main from "../Main"

afterEach(() => {
  cleanup()
})

describe("Main container", () => {

  render(<Main />)
  const main = screen.getByTestId("main")

  test("Main container should render", () => {
    expect(main).toBeInTheDocument()
  })
})