const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/api/register', (req, res) => {
  const { name, id } = req.body;
  console.log(`Đăng ký: ${name} (${id})`);
  res.json({ message: 'Đăng ký thành công!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng ${PORT}`);
});