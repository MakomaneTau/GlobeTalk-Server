import express from 'express';
import cors from 'cors';
import { db } from './lib/firebase.js';

const app = express();
app.use(cors()); // allow cross-origin requests
app.use(express.json());

app.get('/api/users', async (req, res) => {
  const snapshot = await db.collection('users').get();
  const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const docRef = await db.collection('users').add({ name, email });
  res.status(201).json({ id: docRef.id, name, email });
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
