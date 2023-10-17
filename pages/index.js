import React, { Fragment } from 'react';
import Hero from '../components/home-pages/hero';
import FeaturePosts from '../components/home-pages/feature-posts';
import { getFeaturedPosts } from '../lib/post-util';
import Head from 'next/head';

// const Dummy_Posts = [
// 	{
// 		title: 'Getting Started with NextJS',
// 		image: 'getting-started-nextjs.png',
// 		excerpt:
// 			"Some text that describes the NextJS framwork Library and it's essencial meanings",
// 		date: '2023-04-10',
// 		slug: 'getting-started-with-nexjs',
// 	},
// 	{
// 		title: 'Getting Started with NextJS',
// 		image: 'getting-started-nextjs.png',
// 		excerpt:
// 			"Some text that describes the NextJS framwork Library and it's essencial meanings",
// 		date: '2023-04-10',
// 		slug: 'getting-started-with-nexjs1',
// 	},
// 	{
// 		title: 'Getting Started with NextJS',
// 		image: 'getting-started-nextjs.png',
// 		excerpt:
// 			"Some text that describes the NextJS framwork Library and it's essencial meanings",
// 		date: '2023-04-10',
// 		slug: 'getting-started-with-nexjs2',
// 	},
// 	{
// 		title: 'Getting Started with NextJS',
// 		image: 'getting-started-nextjs.png',
// 		excerpt:
// 			"Some text that describes the NextJS framwork Library and it's essencial meanings",
// 		date: '2023-04-10',
// 		slug: 'getting-started-with-nexjs3',
// 	},
// 	{
// 		title: 'Getting Started with NextJS',
// 		image: 'getting-started-nextjs.png',
// 		excerpt:
// 			"Some text that describes the NextJS framwork Library and it's essencial meanings",
// 		date: '2023-04-10',
// 		slug: 'getting-started-with-nexjs4',
// 	},
// 	{
// 		title: 'Getting Started with NextJS',
// 		image: 'getting-started-nextjs.png',
// 		excerpt:
// 			"Some text that describes the NextJS framwork Library and it's essencial meanings",
// 		date: '2023-04-10',
// 		slug: 'getting-started-with-nexjs5',
// 	},
// ];

const headContent = (
	<Head>
		<title>The title for Featured posts</title>
		<meta name='description' content='List of Featured posts' />
	</Head>
);

function HomePage(props) {
	return (
		<Fragment>
			{headContent}
			<Hero />
			<FeaturePosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default HomePage;
