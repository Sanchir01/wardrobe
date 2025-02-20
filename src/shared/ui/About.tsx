import { Title } from './Title'
const AboutSection = () => {
	return (
		<section id='about' className='mt-[150px]'>
			<div className='container'>
				<div className='grid '>
					<Title
						text='Организуйте свой гардероб с умом!'
						size='lg'
						className='font-gilroy font-semibold uppercase  text-right'
					/>
					<div className='flex fap-[30px]  pr-20 mt-5 place-content-end'>
						<p className='max-w-[383px] '>
							Гардеробные системы и двери-купе — это идеальное решение для тех,
							кто ценит порядок и стиль. Забудьте о беспорядке и бесконечных
							поисках нужных вещей. С нашими системами хранения вы сможете
							максимально эффективно использовать пространство.
						</p>
						<p className='max-w-[383px]'>
							Больше не нужно тратить драгоценные минуты на разбор завалов в
							шкафу. Все вещи будут на своих местах, а двери-купе добавят
							элегантности и современности вашему интерьеру. Наслаждайтесь
							каждым моментом, проведенным в своем доме.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-[url('src/shared/public/img/aboutImg.png')] min-h-[360px] bg-no-repeat bg-cover mt-10" />
		</section>
	)
}

export default AboutSection
