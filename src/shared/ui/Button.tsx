import { ReactNode } from 'react'
import cn from 'clsx'
export type ButtonProps = {
	onClick?: () => void
	children?: ReactNode
	classname?: string
}

const Button = ({ onClick, children, classname }: ButtonProps) => {
	return (
		<button
			className={cn(
				'rounded-[2px] bg-white/50  transition hover:opacity-95 active:bg-custom-black active:text-white',
				classname
			)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
