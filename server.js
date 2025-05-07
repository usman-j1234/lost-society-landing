const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));