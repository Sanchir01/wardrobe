import { ReactNode } from 'react'

export type ButtonProps = {
	onClick?: () => void
	children?: ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
	return (
		<button className='p-3 bg-blue-100 rounded-2xl' onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
