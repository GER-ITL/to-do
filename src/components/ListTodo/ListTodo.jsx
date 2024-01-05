import React, { useEffect, useState } from 'react'
import deleteImg from '../../assets/delete.png'
import Form from '../Form/Form'
import style from './TodoList.module.scss'
const ListTodo = () => {
	const [todos, setTodos] = useState([])
	const [allTodos, setAllTodos] = useState(0)
	const [allComplete, setAllComplete] = useState(0)

	useEffect(
		() => setAllComplete(todos.filter(todo => todo.done === true).length),
		[todos]
	)

	const putTodos = value => {
		if (value) {
			setTodos([...todos, { id: Date.now(), text: value, done: false }])
			setAllTodos(allTodos + 1)
		}
	}
	const toggleTodo = id => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== id) return todo

				return {
					...todo,
					done: !todo.done,
				}
			})
		)
	}
	const removeTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id))
		setAllTodos(allTodos - 1)
	}
	return (
		<div className={style.wrapper}>
			<h1>TodoList</h1>
			<Form putTodos={putTodos} />
			<ul>
				{todos.map(todo => {
					return (
						<li
							onClick={() => toggleTodo(todo.id)}
							className={todo.done ? style.done : style.todo}
							key={todo.id}
						>
							{todo.text}
							<img
								onClick={e => {
									e.stopPropagation()
									removeTodo(todo.id)
								}}
								src={deleteImg}
								alt='delete'
							/>
						</li>
					)
				})}
			</ul>
			<div className={style.footer}>
				<span>All todos: {allTodos}</span>
				<span>Complete: {allComplete}</span>
			</div>
			<div className={style.btnClearBlock}>
				<button
					className={style.btnClear}
					onClick={() => {
						setTodos([])
						setAllTodos(0)
						setAllComplete(0)
					}}
				>
					Clear All
				</button>
			</div>
		</div>
	)
}

export default ListTodo
