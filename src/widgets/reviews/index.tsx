import EmblaSlider from '~/shared/ui/DefaultSlider'
import ReviewCart from '~/shared/ui/ReviewCart'
import { Title } from '~/shared/ui/Title'
import UserPhoto1 from '/img/reviewuser(1).png'
import UserPhoto2 from '/img/reviewuser(2).png'
import UserPhoto3 from '/img/reviewuser(3).png'
import UserPhoto4 from '/img/reviewuser(4).png'

export const UserReviews = [
	{
		image: UserPhoto3,
		title: 'Igor',
		alt: 'profile',
		rating: 5,
		text: 'Заказывал двери-купе для гардеробной. Качественные материалы, отличная сборка. Теперь в комнате стало намного больше места, а вещи всегда на своих местах. Спасибо за отличный сервис!'
	},
	{
		image: UserPhoto2,
		title: 'Anna',
		alt: 'profile',
		rating: 5,
		text: 'Купила гардеробную систему с дверями-купе для своей спальни. Очень довольна! Система хранения вместительная, все аккуратно организовано. Двери-купе выглядят стильно и экономят пространство. Рекомендую!'
	},
	{
		image: UserPhoto1,
		title: 'Elena',
		alt: 'profile',
		rating: 4,
		text: 'Долго выбирала между разными вариантами гардеробных систем. Остановилась на вашем сайте и не пожалела! Все сделано быстро и качественно. Двери-купе идеально вписались в интерьер. Очень удобно и функционально!'
	},
	{
		image: UserPhoto4,
		title: 'Dmitriy',
		alt: 'profile',
		rating: 5,
		text: 'Решил обновить гардеробную и заказал у вас систему хранения с дверями-купе. Все сделано по моим размерам, быстро доставили и установили. Теперь все вещи на своих местах, и нет беспорядка. Отличное решение для небольших квартир!"'
	},
	{
		image: UserPhoto1,
		title: 'Elena',
		alt: 'profile',
		rating: 5,
		text: 'Заказывал двери-купе для гардеробной. Качественные материалы, отличная сборка. Теперь в комнате стало намного больше места, а вещи всегда на своих местах. Спасибо за отличный сервис!'
	},
	{
		image: UserPhoto4,
		title: 'Dmitriy',
		alt: 'profile',
		rating: 4,
		text: 'Заказывал двери-купе для гардеробной. Качественные материалы, отличная сборка. Теперь в комнате стало намного больше места, а вещи всегда на своих местах. Спасибо за отличный сервис!'
	}
]

const ReviewsBlock = () => {
	return (
		<div
			id='reviews'
			className='mt-[150px]  scroll-mt-[80px] pb-30 max-[998px]:mt-20 max-[998px]:pb-20 scroll-my-20'
		>
			<div className='container relative'>
				<div className='grid grid-cols-2 gap-5 max-[998px]:grid-cols-1 max-[998px]:place-items-center'>
					<Title
						text={'наши клиенты'}
						size='lg'
						className='uppercase font-gilroy font-semibold leading-9 max-w-[clamp(16.875rem,10.441rem+24.51vw,32.5rem)] col-start-2 max-[998px]:col-start-1 text-[clamp(1.125rem,0.765rem+1.373vw,2rem)] max-[998px]:text-center max-[768px]:leading-6'
					/>
				</div>
				<div className='mt-5'>
					<EmblaSlider arrows classNameContainer='gap-5'>
						{UserReviews.map(({ alt, image, rating, text, title }, i) => (
							<ReviewCart
								key={i}
								image={image}
								title={title}
								alt={alt}
								text={text}
								rating={rating}
							/>
						))}
					</EmblaSlider>
				</div>
			</div>
		</div>
	)
}

export default ReviewsBlock
