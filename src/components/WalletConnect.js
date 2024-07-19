'use client'
import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../lib/connectors'

export default function WalletConnect() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const [isConnecting, setIsConnecting] = useState(false)

  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true)
        await activate(injected)
        setIsConnecting(false)
      } catch (error) {
        console.log('Error on connecting: ', error)
        setIsConnecting(false)
      }
    } else {
      alert('Please install MetaMask to use this feature')
    }
  }

  async function disconnect() {
    try {
      await deactivate()
    } catch (error) {
      console.log('Error on disconnecting: ', error)
    }
  }

  async function switchToScrollSepolia() {
    const scrollSepoliaChainId = '0x82751' // 534351 in hex
    if (library && library.provider.isMetaMask) {
      try {
        await library.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: scrollSepoliaChainId }],
        })
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await library.provider.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: scrollSepoliaChainId,
                chainName: 'Scroll Sepolia',
                nativeCurrency: {
                  name: 'Ethereum',
                  symbol: 'ETH',
                  decimals: 18
                },
                rpcUrls: ['https://sepolia-rpc.scroll.io'],
                blockExplorerUrls: ['https://sepolia-blockscout.scroll.io/']
              }],
            })
          } catch (addError) {
            console.error('Failed to add the Scroll Sepolia network', addError)
          }
        }
        console.error('Failed to switch to the Scroll Sepolia network', switchError)
      }
    }
  }

  useEffect(() => {
    if (active) {
      switchToScrollSepolia()
    }
  }, [active])

  return (
    <div className="flex flex-col items-center">
      {active ? (
        <div className="flex flex-col items-center">
          <p className="text-sm mb-2">Connected with <span className="font-bold">{account.substring(0, 6)}...{account.substring(account.length - 4)}</span></p>
          <button
            onClick={disconnect}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connect}
          disabled={isConnecting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  )
}