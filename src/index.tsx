import React from 'react'
import ReactDOM from 'react-dom'
import { ChainId, DAppProvider } from '@usedapp/core'
import { App } from './App'

const config = {
  readOnlyChainId: ChainId.Ropsten,
  readOnlyUrls: {
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
    [ChainId.Ropsten]: 'https://ropsten.infura.io/v3/186b60f5144d4b3c90cd94dbd3d93c0a',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
