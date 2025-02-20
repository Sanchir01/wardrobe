import { FC } from 'react'

const Ticker: FC = () => {
	return (
		<div className='relative overflow-hidden bg-gray'>
			<div className='flex py-5 uppercase text-white'>
				<div className='whitespace-nowrap shrink-0 px-12 text-4xl animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
				<div className='whitespace-nowrap shrink-0 px-12 text-4xl animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
				<div className='whitespace-nowrap shrink-0 px-12 text-4xl animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
				<div className='whitespace-nowrap shrink-0 px-12 text-4xl animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
				<div className='whitespace-nowrap shrink-0 px-12 text-4xl animate-ticker'>
					стиль, порядок и пространство для вашей жизни
				</div>
			</div>
		</div>
	)
}

export default Ticker
