import { useState } from 'react'

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

  return <>
    <h1 onClick={handleClick} className="title">{title}</h1>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
    <div className='count'>
      <p>Compteur : {count}</p>
      <button onClick={incrementCount}>Incrémenter</button>
      <button onClick={decrementCount}>Décrémenter</button>
    </div>
    <div className='age'>
      <p>Age de {person.firstName} {person.lastName} : {person.age}</p>
      <button onClick={incrementAge}>Gagner une anée</button>
      <button onClick={decrementAge}>Perdre une anée</button>
    </div>
    <div>
      <form>
        <input type='text' name='firstname' value={value} onChange={handleChange} />
        <button>Envoyer</button>
      </form>
    </div>
  </>
}

export default App