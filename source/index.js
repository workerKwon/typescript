import moment from "moment";
import './styles.scss'
import './styles.css'
console.log('hello world');

const getTodos = () => import('./api')

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  getTodos().then(({ fetchTodos }) => {
    fetchTodos().then(resp => console.log(resp))
  })
})