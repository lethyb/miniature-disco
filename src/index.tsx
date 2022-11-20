import * as React from 'react'
import { createRoot } from "react-dom/client"
import Main from './Main'

const rootElement: HTMLElement | null = document.getElementById("root")
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  )
}