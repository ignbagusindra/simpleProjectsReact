import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddTodoApp from "./pages/AddTodoApp";
import CounterApp from './pages/CounterApp';


function App() {

  return (

    <BrowserRouter>
    <div className='containerX'>
      <h3>Various Mini Projects<br /><small><em>React</em></small></h3>
      <Link to={`/`} >Home</Link>&nbsp;&nbsp;
      <Link to={`/add-todo`} >Todo List</Link>&nbsp;&nbsp;
      <Link to={`/react-counter`} >Counter </Link>&nbsp;&nbsp;
    </div>
      <Routes>
        <Route path="/add-todo" element={<AddTodoApp />} />
        <Route path="/react-counter" element={<CounterApp />} />
      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
