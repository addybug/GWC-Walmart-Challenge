import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from "@apollo/client";
import App from './app/app';
import {client} from "./apollo/apollo-client";

ReactDOM.render(
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>
  , document.getElementById('root'));
