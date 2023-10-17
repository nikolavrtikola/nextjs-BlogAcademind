import React from 'react';
import ContactForm from '../components/contact/contact-form';
import Head from 'next/head';

function Contact() {
	return (
		<>
			{/* <h1>Contact!!!</h1> */}
			<Head>
				<title>Contact Page</title>
				<meta name='description' content='Contact Page' />
			</Head>
			<ContactForm />
		</>
	);
}

export default Contact;
