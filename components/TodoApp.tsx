import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'



const TodoApp = () => {
    const[showFooter, setFooter]  = React.useState(false); 
    return (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <button onClick={()=> setFooter(!showFooter)}>{showFooter? 'hide ': 'show '}footer</button>
        {showFooter && <Footer/>}
    </div>
    )
};

export default TodoApp