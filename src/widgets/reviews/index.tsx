import EmblaSlider from '~/shared/ui/DefaultSlider'

const ReviewsBlock = () => {
	return (
		<div id='review'>
			<div className='container'>
				<EmblaSlider>
					{Array.from({ length: 10 }).map((_, i) => (
						<div className='flex-[0_0_100%] min-w-0' key={i}>
							{i}
						</div>
					))}
				</EmblaSlider>
			</div>
		</div>
	)
}

export default ReviewsBlock
