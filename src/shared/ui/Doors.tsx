import EmblaSlider from './DefaultSlider'
import { Title } from './Title'
import door1 from '~/shared/public/img/door.png'
import door2 from '~/shared/public/img/door2.png'
import door3 from '~/shared/public/img/door3.png'
const DoorsSlider = () => {
	return (
		<section id='doors' className='mt-[150px]'>
			<div className='container'>
				<Title
					text='наши двери-купе'
					size='lg'
					className='uppercase text-4xl grid place-content-center font-semibold font-gilroy'
				/>
				<div className='mt-5'>
					<EmblaSlider>
						<div className='flex-none w-1/4 max-h-[350px] '>
							<img
								src={door1}
								alt='door1'
								className='object-cover w-full h-full'
							/>
						</div>
						<div className='flex-none w-1/4 max-h-[350px]'>
							<img
								src={door2}
								alt='door1'
								className='object-cover w-full h-full'
							/>
						</div>
						<div className='flex-none w-1/4 max-h-[350px]'>
							<img
								src={door3}
								alt='door1'
								className='object-cover w-full h-full'
							/>
						</div>
						<div className='flex-none w-1/4 max-h-[350px]'>
							<img
								src={door1}
								alt='door1'
								className='object-cover w-full h-full'
							/>
						</div>
						<div className='flex-none w-1/4 max-h-[350px]'>
							<img
								src={door2}
								alt='door1'
								className='object-cover w-full h-full'
							/>
						</div>
						<div className='flex-none w-1/4 max-h-[350px]'>
							<img
								src={door3}
								alt='door1'
								className='object-cover w-full h-full'
							/>
						</div>
					</EmblaSlider>
				</div>
				<div className='grid  place-content-center font-medium mt-5 leading-relaxed hyphens-auto'>
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
