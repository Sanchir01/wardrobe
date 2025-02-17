import Button from '~/shared/ui/Button'

const Header = () => {
	return (
		<header className='h-20 py-5'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<div className='logo'>logo</div>
					<nav className=''>
						<ul className='flex gap-5'>
							<li>
								<a href='#'>Товары</a>
							</li>
							<li>
								<a href='#'>Отзывы</a>
							</li>
							<li>
								<a href='#'>Цены</a>
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
