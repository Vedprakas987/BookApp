import React from 'react'
import {Loader,Placeholder} from "rsuite"
import "./loder.css"
export default function Loaders() {
  return (
    <div>
    <Placeholder.Paragraph rows={8} />
    <Loader backdrop content="loading..." vertical />
        </div>
  )
}
