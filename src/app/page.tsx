'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import PunkDataTable from '../components/DataTable';
import BlockData from './BlockData';
// import { Web3ReactProvider } from '@web3-react/core'
// import { ethers } from 'ethers'
// import WalletConnect from '../components/WalletConnect'
import WalletConnect from '../components/WalletConnect'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import { createClient, gql } from 'urql';
import { cacheExchange, fetchExchange } from '@urql/core';
const client = createClient({
  url: 'https://gateway-arbitrum.network.thegraph.com/api/{api-key}/subgraphs/id/3WFXNz46rk4iuVgsBybcGtxMa4cbHkBLfuSjUvvqs2MD',
  exchanges: [cacheExchange, fetchExchange],
});
const DATA_QUERY = gql`{
  blocks(first: 5) {
    id
    number
    timestamp
    parentHash
  }
}`;

export default function Home() {

  // const result = await client.query(DATA_QUERY).toPromise();
  // if (result.error) {
  //   return (
  //     <div>
  //       <p>Error: {result.error.message}</p>
  //     </div>
  //   );
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <Button variant="outline"><WalletConnect /></Button>
      </div>
       <div>
       <h1 className="text-2xl font-bold mb-4">Block Data</h1>
       <BlockData />
    </div>

    <div>
      <h1>Block Data</h1>
      <BlockData />
    </div>

    
    </main>
  );
}
