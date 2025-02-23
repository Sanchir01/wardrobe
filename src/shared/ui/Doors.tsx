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
				<div className='grid grid-cols-2 gap-5 max-[998px]:grid-cols-1 max-[998px]:place-items-center'>
					<Title
						text='Организуйте свой гардероб с умом!'
						size='lg'
						className='font-gilroy font-semibold uppercase col-start-2  max-[998px]:col-start-1 text-[clamp(1.125rem,0.765rem+1.373vw,2rem)] max-[998px]:text-center max-[768px]:leading-6'
					/>
				</div>
				<div className='mt-5'>
					<EmblaSlider classNameContainer='gap-5'>
						{DoorsContent.map((item, i) => (
							<div
								className='flex-none w-1/4 max-h-[350px] max-[768px]:w-1/3  max-[576px]:w-3/4 '
								key={i}
							>
								<Image
									src={item.href}
									alt={item.href}
									classname='object-cover w-full h-full'
									loading={item.loading}
								/>
							</div>
						))}
					</EmblaSlider>
				</div>
				<div className='grid place-content-center font-normal mt-5 leading-relaxed hyphens-auto text=[clamp(0.75rem,0.647rem+0.392vw,1rem)]'>
					<p className='text-right max-w-[750px] max-[998px]:text-start'>
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
