import useEmblaCarousel from 'embla-carousel-react'
import { IChildren } from '../types'
import cn from 'clsx'
export interface IEmblaSliderProps extends IChildren {
	classname?: string
}
const EmblaSlider = ({ children, classname }: IEmblaSliderProps) => {
	const [emblaRef] = useEmblaCarousel()
	return (
		<div ref={emblaRef} className={cn('overflow-hidden', classname)}>
			<div className='flex items-center gap-20'>{children}</div>
		</div>
	)
}

export default EmblaSlider
