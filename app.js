const express = require('express');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Trip routes
app.use('/api/trips', require('./routes/api/trips'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
