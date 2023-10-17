import React from 'react';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

// const dummy_post = {
// 	title: 'Getting Started with NextJS',
// 	image: 'getting-started-nextjs.png',
// 	content: '# Some Title Content',
// 	date: '2023-04-10',
// 	slug: 'getting-started-with-nexjs',
// };

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
	const { post } = props;
	const image_path = `/images/posts/${post.slug}/${post.image}`;

	const customRenderers = {
		// img(image) {
		// 	return (
		// 		<Image
		// 			src={`/images/posts/${post.slug}/${image.src}`}
		// 			alt={image.alt}
		// 			width={600}
		// 			height={300}
		// 		/>
		// 	);
		// },
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];

				return (
					<div className={classes.image}>
						<Image
							src={`/images/posts/${post.slug}/${image.properties.src}`}
							alt={image.properties.alt}
							width={600}
							height={300}
							layout='responsive'
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},
		code(code) {
			const { className, children } = code;
			const language = className.split('-')[1];
			return (
				<SyntaxHighlighter
					language={language}
					style={atomDark}
					children={children}
				/>
			);
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader image={image_path} title={post.title} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
