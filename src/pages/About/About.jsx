import React from 'react';
import Layout from '../../components/Layout/Layout';
import aboutus from '../../assets/images/aboutus.jpg';
import aboutus2 from '../../assets/images/aboutus2.jpg';
import './About.css';

function About() {
	return (
		<div>
			<Layout>
				<section className='about-us'>
					<div className='row-normal'>
						<div className='column'>
							<div className='column-1'>
								<img src={aboutus} alt='' />
							</div>
						</div>
						<div className='column'>
							<div className='column-2'>
								<h1>About Us</h1>
								<p>
									We are a new face on the Designer Shops stage and we hope to rise in the top as soon
									as possible.
								</p>
							</div>
						</div>
					</div>
					<div className='row-reverse'>
						<div className='column'>
							<div className='column-1'>
								<img src={aboutus2} alt='' />
							</div>
						</div>
						<div className='column'>
							<div className='column-2-r'>
								<h1>Collaborations</h1>
								<p>Our Shop works only with the best designers in the world.</p>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</div>
	);
}

export default About;
