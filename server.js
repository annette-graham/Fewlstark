const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Johnny', lastName: 'Bravo'},
    {id: 2, firstName: 'Fred', lastName: 'Flintstone'},
    {id: 3, firstName: 'Scooby', lastName: 'Doo'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
