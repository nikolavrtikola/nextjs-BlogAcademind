import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link
					rel='icon'
					type='image/x-icon'
					href='/stock-vector-favorite-star.jpg'
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
