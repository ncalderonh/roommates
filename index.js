const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const roommatesRouter = require('./routes/roommatesRouter');
const gastosRouter = require('./routes/gastosRouter');

app.use('/roommates', roommatesRouter);
app.use('/gastos', gastosRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Servidor compartiendo habitación en http://localhost:${PORT}`);
});