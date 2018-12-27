import ReactDOM   from 'react-dom'
import react      from 'react'
import { h, div } from 'react-hyperscript-helpers'
import Board      from './board'

const render = div([h(Board)])

window.onload = () => {
  const app = document.querySelector('#app')

  ReactDOM.render(render, app)
}