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
	}
]

const Footer = () => {
	return (
		<footer className='bg-custom-black text-white mt-30 p-10'>
			<div className='container'>
				<div className='flex justify-between'>
					<div className='flex gap-10'>
						{footerColumnContent.map((item, i) => (
							<ul key={i}>
								{item.links.map((content, i) => (
									<li key={i}>
										<a href={content.href}>{content.title}</a>
									</li>
								))}
							</ul>
						))}
					</div>
					<Title text={'пространстов, стиль, порядок'} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
