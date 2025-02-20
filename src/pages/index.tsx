import Ticker from '~/shared/ui/ticer'
import HeroBlock from '~/widgets/hero'
import ReviewsBlock from '~/widgets/reviews'

const MainPage = () => {
	return (
		<>
			<HeroBlock />
			<Ticker />
			<ReviewsBlock />
		</>
	)
}

export default MainPage
