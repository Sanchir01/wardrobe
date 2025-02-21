import AboutSection from '~/shared/ui/About'
import DoorsSlider from '~/shared/ui/Doors'
import Ticker from '~/shared/ui/ticer'
import HeroBlock from '~/widgets/hero'
import ReviewsBlock from '~/widgets/reviews'
import WardrobeGrid from '~/widgets/wardrobe'

const MainPage = () => {
	return (
		<>
			<HeroBlock />
			<WardrobeGrid />
			<Ticker />
			<AboutSection />
			<DoorsSlider />
			<ReviewsBlock />
		</>
	)
}

export default MainPage
