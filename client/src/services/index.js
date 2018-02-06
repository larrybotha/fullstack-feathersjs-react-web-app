import fetch from 'isomorphic-fetch';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import authentication from '@feathersjs/authentication-client';

const host = 'http://localhost:3030';

// we need to create our client-side feathers app
const createApp = () =>
  feathers()
    // we configure it specifying the type of application it is - a RESTful app,
    // and how we want to make requests. We want to use the fetch API, and I'm assuming
    // that the fetch polyfill we pass in is purely there for browsers which don't yet
    // support fetch.
    // In fact, no - if I don't provide fetch as a param the UI errors out.
    .configure(rest(host).fetch(fetch))
    // .configure(feathers.hooks())
    .configure(authentication({storage: window.localStorage}));

export default createApp;
