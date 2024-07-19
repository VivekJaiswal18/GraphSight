
// app/BlockData.tsx
import { createClient } from 'urql';
import { DATA_QUERY } from '../lib/queries';
import client from '../lib/urqlClient'; 
import BlockDataTable from './BlockDataTable';

export default async function BlockData() {
  const result = await client.query(DATA_QUERY).toPromise();
  
  if (result.error) {
    return (
      <div>
        <p>Error: {result.error.message}</p>
      </div>
    );
  }

  return <BlockDataTable data={result.data} />;
}