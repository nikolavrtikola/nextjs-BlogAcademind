import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';
function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/koljo.jpg'
					alt='Moja slika'
					width={350}
					height={350}
				/>
			</div>
			<h1>Hi I'm Nikola</h1>
			<p>This is my Blog exercise Next Js project</p>
		</section>
	);
}

export default Hero;
