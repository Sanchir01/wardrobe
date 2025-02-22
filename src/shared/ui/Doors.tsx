import EmblaSlider from './DefaultSlider'
import Image from './Image'
import { Title } from './Title'
import door1 from '/img/door.png'
import door2 from '/img/door2.png'
import door3 from '/img/door3.png'
export const DoorsContent = [
	{
		href: door1,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door2,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door3,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door1,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door2,
		alt: 'door',
		loading: 'lazy'
	},
	{
		href: door3,
		alt: 'door',
		loading: 'lazy'
	}
]
const DoorsSlider = () => {
	return (
		<section id='doors' className='mt-[150px]'>
			<div className='container'>
				<div className='grid grid-cols-2 gap-5'>
					<div />
					<Title
						text='наши двери-купе'
						size='lg'
						className='uppercase text-4xl font-semibold font-gilroy'
					/>
				</div>
				<div className='mt-5'>
					<EmblaSlider classNameContainer='gap-5'>
						{DoorsContent.map((item, i) => (
							<div className='flex-none w-1/4 max-h-[350px] ' key={i}>
								<Image
									src={item.href}
									alt={item.href}
									classname='object-cover w-full h-full'
									loading={item.loading}
								/>
							</div>
						))}
						<div className='flex-none w-1/4 max-h-[350px] '></div>
					</EmblaSlider>
				</div>
				<div className='grid place-content-center font-normal mt-5 leading-relaxed hyphens-auto text-[18px]'>
					<p className='text-right max-w-[750px]'>
						Мы предлагаем современные и функциональные
					</p>
					<p className=' max-w-[750px]'>
						решения для организации вашего гардероба. Наши системы хранения и
						двери-купе помогут вам максимально эффективно использовать
						пространство, создавая комфорт и порядок в вашем доме.решения для
						организации вашего гардероба
					</p>
				</div>
			</div>
		</section>
	)
}

export default DoorsSlider
