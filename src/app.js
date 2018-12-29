import 'react-toastify/dist/ReactToastify.min.css'

import ReactDOM                  from 'react-dom'
import react                     from 'react'
import { h, div }                from 'react-hyperscript-helpers'
import { ToastContainer, toast } from 'react-toastify'
import Board                     from './board'

const App = div([
  h(Board),
  h(ToastContainer)
])

window.onload = () => { // TODO: ssr mode
  const root = document.querySelector('#app')
  ReactDOM.render(App, root)
}