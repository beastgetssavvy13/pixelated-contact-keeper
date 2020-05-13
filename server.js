const express = require('express'); //common js ->react uses es6 modules
const app = express();
app.get('/', (req, res) => res.json({ msg: 'Welcome to the Contact keeper....API !' }));

//Define Routes
app.use('/api/auth/', require('./routes/auth'));
app.use('/api/contacts/', require('./routes/contacts'))
app.use('/api/users/', require('./routes/users'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on a ${PORT}`));