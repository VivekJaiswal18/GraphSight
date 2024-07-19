// lib/urqlClient.ts
import { createClient } from 'urql';

const client = createClient({
    url: 'https://gateway-arbitrum.network.thegraph.com/api/c5045389ebbb3ee0272fc8c92423ee4b/subgraphs/id/3WFXNz46rk4iuVgsBybcGtxMa4cbHkBLfuSjUvvqs2MD',
    exchanges: []
});

export default client;