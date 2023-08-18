import { useState } from "react"

import '../App.css'

const AddTodoApp = () => {


const [id, setId] = useState(3)
const [todos, setTodos] = useState([
    {id: 0, name: "Go to school"},
    {id: 1, name: "Pickup groceries"},
    {id: 2, name: "Go to the gym"}
])

const [todoName, setTodoName] = useState("")

function addTodo(e){
    e.preventDefault();
    setTodos([...todos, {id: id, name: todoName}])
    setId(id+1)
}

    function onDelete(id) {
        setTodos(
            todos => todos.filter(todo => todo.id !== id)
        )
    }

  return (
    <div className="containerX">
        <h3>Todo List React<br /><em><small>Datas from object JSON (Hardcoded)</small></em></h3>
        
        <ul className="divide-y divide-gray-100">
            {
                todos.map(todo => <li key={todo.id}>
                    {todo.id + '. ' + todo.name}
                    &nbsp;&nbsp;&nbsp;
                   <button onClick={() => onDelete(todo.id)}>x</button>
                    </li>)
            }
        </ul>

        <form onSubmit={addTodo}>
            <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Add todo" autoFocus value={todoName} onChange={e => setTodoName(e.target.value)} />
            &nbsp;&nbsp;
            <button onClick={addTodo} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add todo
            </button>
        </form>

    </div>
  )
}

export default AddTodoApp