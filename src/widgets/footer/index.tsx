import { Title } from '~/shared/ui/Title'

export interface IFooterColumn {
	links: IFooterColumnContent[]
}
export interface IFooterColumnContent {
	title: string
	href: string
}
const footerColumnContent: IFooterColumn[] = [
	{
		links: [
			{ title: 'гардеробы', href: '#wardrobe' },
			{ title: 'двери', href: '#doors' },
			{ title: 'О нас', href: '#about' },
			{ title: 'отзывы', href: '#reviews' }
		]
	},
	{
		links: [
			{ title: 'telegram', href: 'https://t.me/garderob_sistem' },
			{ title: 'vk', href: 'https://vk.com/sistemy_hranenia_dveri_kupe' },
			{ title: 'mail', href: '/' },
			{ title: 'yandex', href: '/' }
		]
	},
	{
		links: [
			{
				title: 'адрес компании',
				href: 'https://vk.com/sistemy_hranenia_dveri_kupe'
			},
			{
				title: 'часы работы',
				href: 'https://vk.com/sistemy_hranenia_dveri_kupe'
			},
			{ title: 'акции', href: 'https://vk.com/sistemy_hranenia_dveri_kupe' },
			{ title: 'каталог', href: 'https://vk.com/sistemy_hranenia_dveri_kupe' }
		]
	},
	{
		links: [
			{
				title: 'Гарантии и сервис',
				href: 'https://vk.com/sistemy_hranenia_dveri_kupe'
			},
			{
				title: 'Акции и скидки',
				href: 'https://vk.com/sistemy_hranenia_dveri_kupe'
			},
			{ title: 'Услуги монтажа', href: '' }
		]
	}
]

const Footer = () => {
	return (
		<footer className='bg-custom-black text-white  p-10 uppercase max-[998px]:p-5'>
			<div className='container'>
				<div className='grid grid-cols-2 gap-5'>
					<div className='flex flex-col justify-between flex-wrap'>
						<div className='flex gap-10 font-normal max-[768px]:gap-5'>
							{footerColumnContent.map((item, i) => (
								<ul key={i} className='flex flex-col gap-2'>
									{item.links.map((content, i) => (
										<li
											key={i}
											className='text-[clamp(0.75rem,0.571rem+0.476vw,1rem)]'
										>
											<a href={content.href}>{content.title}</a>
										</li>
									))}
								</ul>
							))}
						</div>
						<p className='mt-25 font-normal'>© 2025 Все права защищены</p>
					</div>
					<Title
						text={'пространсто стиль порядок'}
						size='xs'
						className='font-gilroy text-[clamp(3.625rem,1.75rem+5vw,6.25rem)] opacity-9 leading-[90px] font-bold max-[998px]:hidden'
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
