import { Title } from '~/shared/ui/Title'

const WardrobeGrid = () => {
	return (
		<section id='wardrobe' className='mt-[150px]'>
			<div className='container'>
				<div className='grid grid-cols-2 gap-5'>
					<Title
						text={'функциональные решения для вашего интерьера'}
						size='lg'
						className='uppercase font-gilroy font-medium leading-9 max-w-[520px] col-start-2'
					/>
				</div>
				<div className='mt-5 text-[18px]'>
					<div className='grid grid-cols-4 gap-5 font-normal '>
						<div>
							<img src='/img/wardrobe.png' className='w-[400px]' />
							<h6 className='mt-[10px]'>SpaceSaver</h6>
						</div>
						<div>
							<img src='/img/wardrobe1.png' className='' />
							<h6 className='mt-[10px]'>OrganizeIt</h6>
						</div>
						<p className='item'>
							Организуйте пространство с умом и стилем! Наши гардеробные системы
							и двери-купе помогут вам создать идеальный порядок в вашем доме.
						</p>
						<div>
							<img src='/img/wardrobe2.png' alt='wardrobe' />
							<h6 className='mt-[10px]'>WardrobeWizard</h6>
						</div>
					</div>
					<div className='grid grid-cols-2 mt-5 gap-5'>
						<div className='grid grid-cols-1'>
							<div className='flex gap-5'>
								<div className=''>
									<img
										src='/img/wardrobe3.png'
										alt='wardrobe'
										className='max-w-[345px] object-cover'
									/>
									<h6 className='mt-[10px]'>StyleBox</h6>
								</div>
								<div className='' />
							</div>
							<div className='grid grid-cols-2 gap-5 mt-5'>
								<div className='mt-auto'>
									Удобные, компактные и эстетичные решения для хранения вещей
									сделают ваш интерьер функциональным и современным
								</div>
								<div className=''>
									<img
										src='/img/wardrobe4.png'
										alt='wardrobe'
										className='object-cover h-full w-full'
									/>
									<h6 className='mt-[10px]'>NeatStack</h6>
								</div>
							</div>
						</div>
						<div className='max-w-[760px]'>
							<img
								src='/img/wardrobe5.png'
								className='h-full w-full object-cover'
							/>
							<h6 className='mt-[10px]'>StyleBox</h6>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WardrobeGrid
