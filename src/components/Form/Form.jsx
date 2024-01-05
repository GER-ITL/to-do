import React, { useState } from 'react'
import style from './Form.module.scss'

const Form = ({ putTodos }) => {
	const [value, setValue] = useState('')
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				putTodos(value)
				setValue('')
			}}
		>
			<input
				className={style.input}
				type='text'
				value={value}
				onChange={e => {
					setValue(e.target.value)
				}}
			/>
		</form>
	)
}

export default Form
