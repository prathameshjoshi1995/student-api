
import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import CustomMiddleware from './middleware/logMiddleware.js';

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(CustomMiddleware);


app.use('/students', studentRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
