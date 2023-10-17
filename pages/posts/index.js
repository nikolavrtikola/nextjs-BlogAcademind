import React from 'react';

import AllPosts from '../../components/posts/all-post';

import { getAllPosts } from '../../lib/post-util';
import Head from 'next/head';
// const Dummy_Posts = [
// 	{
// 		title: 'Getting Started with NextJS',
// 		date: '2022-10-16',
// 		image: 'getting-started-nextjs.png',
// 		excerpt:
// 			'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
// 		slug: 'getting-started-with-nexjs',
// 	},
// ];

const headContent = (
	<Head>
		<title>The All Posts Page</title>
		<meta name='description' content='List of all posts' />
	</Head>
);

function HomePost(props) {
	return (
		<>
			{headContent}
			<AllPosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts,
		},
	};
}

export default HomePost;
