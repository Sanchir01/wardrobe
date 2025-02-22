import { useCallback } from 'react'
import { useSwitchHeader } from '~/app/store/useSwitchHeader'
import { useIntersection } from '~/shared/hooks/useIntersection'
import Button from '~/shared/ui/Button'
import { Title } from '~/shared/ui/Title'
const HeroBlock = () => {
	const setState = useSwitchHeader(state => state.setSwitchHeader)

	const handleIntersect = useCallback(() => {
		setState()
	}, [setState])

	const observeRef = useIntersection(handleIntersect)

	return (
		<section
			ref={observeRef}
			id='hero'
			className={
				"bg-[url('/img/heroBg.png')] min-h-dvh bg-no-repeat bg-cover text-white  uppercase pt-25  max-[768px]:pt-8"
			}
		>
			<div className='container flex flex-col min-h-dvh'>
				<div className=' max-[768px]:flex-col-reverse max-[768px]:flex '>
					<div className='flex items-center gap-10 text-[clamp(0.875rem,0.834rem+0.175vw,1rem)] leading-5  max-[768px]:gap-[5px]  max-[768px]:flex-col max-[576px]:items-start  max-[576px]:font-normal max-[576px]:normal-case max-[576px]:mt-3  '>
						<p className=' max-w-[342px] '>
							Наша команда профессионалов поможет создать идеальную систему
							хранения, которая будет радовать вас каждый день.
						</p>
						<p className=' max-w-[342px]'>
							Мы предлагаем вам современные решения для организации пространства
							в любом уголке вашего дома.
						</p>
					</div>
					<Title
						size='xl'
						text='гардеробные системы хранения и двери-купе'
						className='pt-15 text-[clamp(2.625rem, 1.192rem+6.114vw, 7rem)] leading-[clamp(2.625rem,1.192rem+6.114vw,7rem)] uppercase grid place-content-center font-gilroy text-center max-[576px]:text-left'
					/>
				</div>
				<a
					href='/'
					className='underline text-lg pt-10 grid place-content-center max-[576px]:hidden'
				>
					вызвать замерщика
				</a>

				<Button classname='w-full py-[10px] min-[576px]:hidden  uppercase block mt-auto mb-5'>
					<a href='/' className='text-lg ' onClick={e => e.stopPropagation()}>
						вызвать замерщика
					</a>
				</Button>
			</div>
		</section>
	)
}
{
	/* <div className='text-[60px] max-w-1040px pt-20 grid place-content-center leading-16'>
					<p className='ml-0'>Добро пожаловать</p>
					<p className='ml-[150px]'>в мир функциональных</p>
					<p className='ml-[300px]'>дверей-купе и удобных </p>
					<p className='ml-[450px]'>Гардеробных систем!</p>
				</div> */
}
export default HeroBlock
