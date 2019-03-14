import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/hero-caption', (_, res) => {
  res.json({
    title: 'CKY - UK, a clan made by players',
    subtitle: 'A clan is not defined by its name, but by its players',
  });
});

app.listen(8080, err => {
  if (err) throw new Error('Server initialisation error', err.stack);

  console.log('Ready!');
});
