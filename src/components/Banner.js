export default function Banner() {
	return (
		<div className='banner'>
			<div className='container'>
				<div className='slider-container has-scrollbar'>
					<div className='slider-item'>
						<img
							src='./assets/images/banner-1.jpg'
							alt="women's latest fashion sale"
							className='banner-img'
						/>
						<div className='banner-content'>
							<p className='banner-subtitle'>Trending item</p>
							<h2 className='banner-title'>
								Women's latest fashion sale
							</h2>
							<p className='banner-text'>
								starting at &dollar; <b>20</b>.00
							</p>
							<span
								href='#'
								className='banner-btn'>
								Shop now
							</span>
						</div>
					</div>
					<div className='slider-item'>
						<img
							src='./assets/images/banner-2.jpeg'
							alt='electronics'
							className='banner-img'
						/>
						<div className='banner-content'>
							<p className='banner-subtitle'>Trending tools</p>
							<h2 className='banner-title'>Top Electronics</h2>
							<p className='banner-text'>
								starting at &dollar; <b>500</b>.00
							</p>
							<span
								href='#'
								className='banner-btn'>
								Shop now
							</span>
						</div>
					</div>
					<div className='slider-item'>
						<img
							src='./assets/images/banner-3.jpg'
							alt='new fashion sale'
							className='banner-img'
						/>
						<div className='banner-content'>
							<p className='banner-subtitle'>Sale offer</p>
							<h2 className='banner-title'>
								New fashion summer sale
							</h2>
							<p className='banner-text'>
								starting at &dollar; <b>29</b>.99
							</p>
							<span
								href='#'
								className='banner-btn'>
								Shop now
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
