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
			{ title: 'Garderob', href: '/garderob' },
			{ title: 'New Collection', href: '/new-collection' },
			{ title: 'Sale', href: '/sale' },
			{ title: 'Contacts', href: '/contacts' }
		]
	},
	{
		links: [
			{ title: 'About Us', href: '/about' },
			{ title: 'Blog', href: '/blog' },
			{ title: 'Shipping', href: '/shipping' },
			{ title: 'FAQ', href: '/faq' }
		]
	},
	{
		links: [
			{ title: 'Our Stores', href: '/stores' },
			{ title: 'Contact Info', href: '/contacts' },
			{ title: 'Careers', href: '/careers' },
			{ title: 'Partnership', href: '/partnership' }
		]
	},
	{
		links: [
			{ title: 'Our Stores', href: '/stores' },
			{ title: 'Contact Info', href: '/contacts' },
			{ title: 'Careers', href: '/careers' }
		]
	}
]

const Footer = () => {
	return (
		<footer className='bg-custom-black text-white mt-30 p-10 uppercase '>
			<div className='container'>
				<div className='grid grid-cols-2 gap-5'>
					<div className='flex flex-col justify-between'>
						<div className='flex gap-10 font-normal'>
							{footerColumnContent.map((item, i) => (
								<ul key={i} className='flex flex-col gap-2'>
									{item.links.map((content, i) => (
										<li key={i}>
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
						className='font-gilroy text-[100px] opacity-9 leading-[90px] font-bold'
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
