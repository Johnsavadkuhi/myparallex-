import ApolloClient from 'apollo-boost';

const uri  = process.env.URI 

const client = new ApolloClient({
    uri 
  });

export default client 