import AboutSection from '~/shared/ui/About'
import DoorsSlider from '~/shared/ui/Doors'
import Ticker from '~/shared/ui/ticer'
import HeroBlock from '~/widgets/hero'
import ReviewsBlock from '~/widgets/reviews'

const MainPage = () => {
	return (
		<>
			<HeroBlock />
			<Ticker />
			<AboutSection />
			<DoorsSlider />
			<ReviewsBlock />
		</>
	)
}

export default MainPage
