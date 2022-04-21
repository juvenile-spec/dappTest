import React,{StrictMode} from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {createWeb3ReactRoot, Web3ReactProvider} from '@web3-react/core';

import App from './pages/App';
import { persistor, store } from "./store";
import './index.css';
import {NetworkContextName} from './constants/misc'
import getLibrary from './utils/getLibrary'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)
if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ProviderNetwork getLibrary={getLibrary}>
              <App />
            </Web3ProviderNetwork>
          </Web3ReactProvider>
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);


// if (process.env.REACT_APP_SERVICE_WORKER !== 'false') {
//   serviceWorkerRegistration.register()
// }
export { INFURA_NETWORK_URLS } from './constants/chains'