import Button from '~/shared/ui/Button'
import logo from '~/shared/public/img/logo.svg'
const Header = () => {
	return (
		<header className='h-20 shadow-lg shadow-bottom-1 sticky top-0 shadow-black/10 z-20  border-b border-white backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<img src={logo} className='w-20 h-20' />
					<nav className=''>
						<ul className='flex gap-5'>
							<li>
								<a href='#'>Товары</a>
							</li>
							<li>
								<a href='#'>Цены</a>
							</li>
							<li>
								<a href='#'>Отзывы</a>
							</li>
							<li>
								<a href='#'>Информация</a>
							</li>
						</ul>
					</nav>
					<Button>
						<a href='https://vk.com/sistemy_hranenia_dveri_kupe'>
							Написать мне
						</a>
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
