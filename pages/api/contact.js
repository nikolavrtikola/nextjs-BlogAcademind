import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;
		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim === '' ||
			!message ||
			message.trim === ''
		) {
			res.status(422).json({ message: 'Invalid Input' });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
		};

		let client;
		const connectionString = `mongodb+srv://${process.env.mongodb_Username}:${process.env.mongodb_Password}@${process.env.mongodb_cluster}.xvpz9.mongodb.net/${process.env.mongodb_database}`;
		try {
			client = await MongoClient.connect(connectionString);
		} catch (err) {
			res.status(500).json({ message: 'Could not connect to the database' });
			return;
		}
		const db = client.db();
		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage._id = result.insertedId;
		} catch (err) {
			client.close();
			res
				.status(500)
				.json({ message: 'Problem with iserting data into database' });
			return;
		}
		console.log(newMessage);
		client.close();
		res
			.status(201)
			.json({ message: 'Message sent Succesfuly', message: newMessage });
	}
}

export default handler;
