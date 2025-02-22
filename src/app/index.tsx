import MainPage from '~/pages'
import Footer from '~/widgets/footer'
import Header from '~/widgets/header'

const App = () => {
	return (
		<>
			<Header />
			<main>
				<div className='wrapper'>
					<MainPage />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
