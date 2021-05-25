import { render } from './module1'
import './root.scss'

const data1 = render('Misha')
const data2 = render('Masha')

const root = document.getElementById('root')
root.innerHTML = data1 + data2