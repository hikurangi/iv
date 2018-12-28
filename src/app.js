import ReactDOM   from 'react-dom'
import react      from 'react'
import { h, div } from 'react-hyperscript-helpers'
import Board      from './board'

window.onload = () => { // TODO: ssr mode
  const app = document.querySelector('#app')
  ReactDOM.render(h(Board), app)
}