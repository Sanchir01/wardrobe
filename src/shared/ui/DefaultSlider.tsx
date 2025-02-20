import useEmblaCarousel from 'embla-Carousel-react'
import { IChildren } from '../types'

const EmblaSlider = ({ children }: IChildren) => {
	const [emblaRef] = useEmblaCarousel()
	return (
		<div ref={emblaRef} className='overflow-hidden'>
			<div className='flex items-center gap-20'>{children}</div>
		</div>
	)
}

export default EmblaSlider
