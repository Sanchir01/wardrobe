import { useState } from 'react'
import { Title } from './Title'
import cn from 'clsx'
import Image from './Image'
export interface IReviewCartProps {
	image: string
	title: string
	alt: string
	text: string
	rating: number
}
const ReviewCart = ({ alt, image, text, title, rating }: IReviewCartProps) => {
	const [expanded, setExpanded] = useState(false)
	const MAX_LENGTH = 150

	return (
		<div
			className={cn(
				'p-5 bg-white max-w-[350px] h-[264px] shrink-0 flex-none basis-[23%] rounded-lg transition-all duration-200',
				expanded ? 'overflow-y-scroll' : ''
			)}
		>
			<div>
				<div className='flex items-center gap-5'>
					<div className='w-12 h-12 rounded-full'>
						<Image
							src={image}
							alt={alt}
							classname='object-cover'
							loading='lazy'
						/>
					</div>
					<div>
						<Title text={title} size='xs' />
					</div>
				</div>
				<div className='text-yellow-400 text-lg pt-2'>
					{'★'.repeat(rating) + '☆'.repeat(5 - rating)}
				</div>

				<div
					className={cn(
						'transition-all duration-500 overflow-hidden ',
						expanded ? 'max-h-[200px] opacity-100' : 'max-h-[50px] opacity-80'
					)}
				>
					<p className='text-gray-700 transition-all duration-300'>
						{expanded
							? text
							: text.slice(0, MAX_LENGTH) +
								(text.length > MAX_LENGTH ? '...' : '')}
					</p>
				</div>

				{text.length > MAX_LENGTH && (
					<button
						className='text-blue-500 mt-2 hover:underline cursor-pointer transition-all duration-300'
						onClick={() => setExpanded(!expanded)}
					>
						{expanded ? 'Скрыть' : 'Читать далее'}
					</button>
				)}
			</div>
		</div>
	)
}
export default ReviewCart
