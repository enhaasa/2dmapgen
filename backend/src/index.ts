import { Request, Response } from 'express';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Hejsan Svejsan!' });
});

app.listen(port, () => {
  console.log('Server listening on port', port);
});
