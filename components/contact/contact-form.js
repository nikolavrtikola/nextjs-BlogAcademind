import React, { useEffect, useState } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';
import { test } from 'gray-matter';

function ContactForm() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setText] = useState('');

	const [requestStatus, setRequestStatus] = useState(); //pending, success,error
	const [requestError, setRequestError] = useState();

	useEffect(() => {
		if (requestStatus === 'success' || requestStatus === 'error') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [requestStatus]);

	async function sendContactData(contactDetails) {
		const response = await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(contactDetails),
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.message || 'Something went wrong!!!');
		}
	}

	async function submitMessageHandler(e) {
		e.preventDefault();

		setRequestStatus('pending');
		try {
			await sendContactData({
				email: email,
				name: name,
				message: message,
			});
			setRequestStatus('success');

			setEmail('');
			setName('');
			setText('');
		} catch (err) {
			setRequestError(err.message);
			setRequestStatus('error');
		}
	}

	let notification;
	if (requestStatus === 'pending') {
		notification = {
			title: 'Pending',
			message: 'Your message is on the way to the database...',
			status: 'pending',
		};
	}

	if (requestStatus === 'success') {
		notification = {
			title: 'Success',
			message: 'Message send Succesfully',
			status: 'success',
		};
	}

	if (requestStatus === 'error') {
		notification = {
			title: 'Error',
			message: requestError,
			status: 'error',
		};
	}

	return (
		<section className={classes.contact} onSubmit={submitMessageHandler}>
			<h1>How can I help You?</h1>
			<form className={classes.form}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Your Message</label>
					<textarea
						id='message'
						rows='5'
						onChange={(e) => setText(e.target.value)}
						value={message}></textarea>
				</div>

				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					title={notification.title}
					status={notification.status}
					message={notification.message}
				/>
			)}
		</section>
	);
}

export default ContactForm;
