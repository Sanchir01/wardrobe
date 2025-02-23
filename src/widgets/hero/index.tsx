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
			<div className='container '>
				<div className='flex flex-col min-h-[calc(100dvh-100px)] max-[769px]:min-h-[calc(100dvh-44px)]'>
					<div className=' max-[768px]:flex-col-reverse max-[768px]:flex '>
						<div
							className={`flex items-center gap-10 text-[clamp(0.875rem,0.834rem+0.175vw,1rem)] leading-5 
							 max-[768px]:gap-[5px]  max-[768px]:flex-col max-[576px]:items-start  max-[576px]:font-normal max-[576px]:normal-case max-[576px]:mt-3`}
						>
							<p className=' max-w-[342px] '>
								Наша команда профессионалов поможет создать идеальную систему
								хранения, которая будет радовать вас каждый день.
							</p>
							<p className=' max-w-[342px]'>
								Мы предлагаем вам современные решения для организации
								пространства в любом уголке вашего дома.
							</p>
						</div>
						<Title
							size='xl'
							text='гардеробные системы хранения и двери-купе'
							className='pt-15 text-[clamp(3.25rem,0.214rem+8.095vw,7.5rem)] leading-[clamp(2.625rem,1.692rem+6.114vw,7rem)] uppercase grid place-content-center font-gilroy text-center max-[576px]:text-left'
						/>
					</div>
					<a
						href='/'
						className='underline text-lg pt-10 grid place-content-center max-[769px]:hidden'
					>
						вызвать замерщика
					</a>
					<div className='text-[clamp(2.25rem,1.722rem+2.254vw,3.75rem)] max-w-1040px pt-20 grid place-content-center leading-16 mt-auto pb-[50px] max-[769px]:hidden'>
						<p className='ml-0'>Добро пожаловать</p>
						<p className='ml-[150px] max-[1200px]:ml-12'>
							в мир функциональных
						</p>
						<p className='ml-[300px] max-[1200px]:ml-24'>
							дверей-купе и удобных{' '}
						</p>
						<p className='ml-[450px] max-[1200px]:ml-36'>Гардеробных систем!</p>
					</div>
					<Button classname='w-full text-lg py-[10px] min-[769px]:hidden  uppercase  mt-auto pb-3  max-[769px]:text-sm'>
						<a href='/' className=' ' onClick={e => e.stopPropagation()}>
							вызвать замерщика
						</a>
					</Button>
				</div>
			</div>
		</section>
	)
}

export default HeroBlock
