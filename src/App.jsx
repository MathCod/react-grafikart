import { useState } from 'react'
import { NavBar } from './NavBar'
import { Slider } from './Slider'

const title = 'Bonjour les gens'
const todos = [
  'Apprendre le React',
  'Apprendre le NodeJS',
  'Apprendre le GraphQL'
]

function App() {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }
  const decrementCount = () => {
    setCount(count - 1)
  }

  const [person, setperson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 18
  })

  const incrementAge = () => {
    setperson({...person, age: person.age + 1})
  }
  const decrementAge = () => {
    setperson({...person, age: person.age - 1})
  }

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    alert('Clic sur le titre effectué !')
  }

  const [value, setValue] = useState('')
  const handleChange = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Formulaire envoyé :", value);
}

  return <>
    <NavBar />
    <Slider />
    <h1 onClick={handleClick} className="title">{title}</h1>
    <ul className="title container my-1">
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
    <div className='count'>
      <p>Compteur : {count}</p>
      <button className='btn btn-primary my-1' onClick={incrementCount}>Incrémenter</button>
      <button className='btn btn-danger my-1' onClick={decrementCount}>Décrémenter</button>
    </div>
    <div className='age'>
      <p>Age de {person.firstName} {person.lastName} : {person.age}</p>
      <button className='btn btn-primary my-1' onClick={incrementAge}>Gagner une anée</button>
      <button className='btn btn-danger my-1' onClick={decrementAge}>Perdre une anée</button>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input className='my-2' type='text' name='firstname' value={value} onChange={handleChange} />
        <button>Envoyer</button>
      </form>
    </div>
  </>
}

export default App