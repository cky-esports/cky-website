import express from 'express';

const app = express();

app.listen(3000, err => {
  if (err) throw new Error('Server initialisation error', err.stack);

  console.log('> Ready!');
});
