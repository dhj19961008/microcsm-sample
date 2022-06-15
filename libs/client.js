import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'dentalhappy',
  apiKey: process.env.API_KEY,
});