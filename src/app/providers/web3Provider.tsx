'use client'

import { Web3ReactProvider } from '@web3-react/core'
import { BrowserProvider, JsonRpcProvider } from 'ethers'
import { ReactNode } from 'react'

function getLibrary(provider: any) {
  return new BrowserProvider(provider)
}

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {children}
    </Web3ReactProvider>
  )
}