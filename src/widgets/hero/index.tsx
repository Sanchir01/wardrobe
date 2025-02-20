import { Title } from '~/shared/ui/Title'
const HeroBlock = () => {
	return (
		<section
			className={
				"bg-[url('/img/heroBg.png')] min-h-screen bg-no-repeat bg-cover text-white  uppercase pt-25"
			}
		>
			<div className='container'>
				<div className=''>
					<div className='flex items-center gap-10'>
						<p className='text-[16px] max-w-[342px] leading-5'>
							Наша команда профессионалов поможет создать идеальную систему
							хранения, которая будет радовать вас каждый день.
						</p>
						<p className='text-[16px] max-w-[342px] leading-5'>
							Мы предлагаем вам современные решения для организации пространства
							в любом уголке вашего дома.
						</p>
					</div>
					<Title
						size='xl'
						text='гардеробные системы хранения и двери-купе'
						className='pt-15 text-[105px] leading-28 uppercase grid place-content-center font-gilroy'
					/>
					<a
						href='/'
						className='underline text-lg pt-10 grid place-content-center'
					>
						вызвать замерщика
					</a>
					<div className='text-[60px] max-w-1040px pt-20 grid place-content-center'>
						<p className='ml-0'>Добро пожаловать</p>
						<p className='ml-[150px]'>в мир функциональных</p>
						<p className='ml-[300px]'>дверей-купе и удобных </p>
						<p className='ml-[450px]'>Гардеробных систем!</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroBlock
