const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Servir arquivos estáticos da pasta 'web-build' (diretório de saída da exportação do Expo)
app.use(express.static(path.join(__dirname, 'web-build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web-build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
