import React, { useState } from 'react'

const List = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h1>
				List:
				<span
					onClick={() => {
						setCount(count + 1)
					}}
				>
					{count}
				</span>
			</h1>
		</div>
	)
}

export default List
