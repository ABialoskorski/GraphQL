const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();
//allow cors
//app.use(cors());
app.use(cors)
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4100,() => {
    console.log('listening on port: 4100')
});
