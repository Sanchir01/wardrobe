import Button from '~/shared/ui/Button'
import Logo from '~/shared/ui/Logo'
import cn from 'clsx'
import { useSwitchHeader } from '~/app/store/useSwitchHeader'
export const HeaderNav = [
	{
		title: 'Гардеробы',
		href: '#wardrobe'
	},
	{
		title: 'О проекте',
		href: '#about'
	},
	{
		title: 'Двери-купе',
		href: '#doors'
	},
	{
		title: 'Отзывы',
		href: '#reviews'
	}
]

const Header = () => {
	const headerSwitch = useSwitchHeader(state => state.switchHeader)
	return (
		<header
			className={cn(
				'h-18 shadow-lg  py-3 shadow-bottom-1 fixed left-0 right-0 top-0 shadow-black/10 z-20  border-b border-white/40  backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in',
				headerSwitch ? 'bg-black' : ''
			)}
		>
			<div className='container'>
				<div className='flex items-center justify-between '>
					<Logo />
					<nav className='text-white uppercase'>
						<ul className='flex gap-10'>
							{HeaderNav.map((item, i) => (
								<li key={i}>
									<a href={item.href}>{item.title}</a>
								</li>
							))}
						</ul>
					</nav>
					<Button classname='px-4 py-2 uppercase text-sm'>
						<a
							href='https://vk.com/sistemy_hranenia_dveri_kupe'
							onClick={e => e.stopPropagation}
						>
							Закать звонок
						</a>
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
