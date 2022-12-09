import { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import truncateEthAddress from "truncate-eth-address";
import erc20ABi from '../config/erc20Abi.json'
import { USDT, USDC, BUSD, DAI, address } from '../config/config'

export const WalletConnectContext = createContext();

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: 'https://bsc-dataseed1.binance.org'
      },
      chainId: 56
    }
  }
}

export const ConnectWalletProvider = ({ children }) => {
  const [addr, setAddr] = useState(null);
  const [web3Modal, setWeb3Modal] = useState({});
  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [usdtContract, setUsdtContract] = useState(null);
  const [daiContract, setDaiContract] = useState(null);
  const [usdcContract, setUsdcContract] = useState(null);
  const [busdContract, setBusdContract] = useState(null);
  const [chainId, setChainId] = useState(null)
  const [signer, setSigner] = useState(null)

  useEffect(() => {
      const connectWalletOnPageLoad = async () => {
        if (localStorage?.getItem('isWalletConnected') === ('true')) {
          try{ 
              if (typeof window !== "undefined") {
                const web3Modal = new Web3Modal({
                  network: "mainnet", // optional
                  cacheProvider: true, // optional
                  providerOptions, // required
                  theme: "dark",
                });
              setWeb3Modal(web3Modal)
                await ConnectWallet()
              localStorage.setItem('isWalletConnected', true)
            }

          } catch(ex) {
            console.log(ex)
          }
        }
      }
      connectWalletOnPageLoad()
    },[])

  const isConnected = () => {
    account != null ? true : false;
  };

  const ConnectWallet = async () => {
    if (typeof window !== "undefined") {
      var modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
        theme: "dark",
      });
      setWeb3Modal(modal);
    }
    localStorage.setItem("isWalletConnected", true);
    setIsConnecting(true)
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    setSigner(signer)
    const addr = await signer.getAddress();
    let pr = await provider.getNetwork();
    setChainId(pr.chainId);
    setAddr(addr);
    const address = truncateEthAddress(addr);
    setAccount(address);
    console.log(addr)
    let usdtc = await new ethers.Contract(USDT, erc20ABi, signer);
    let usdcc = await new ethers.Contract(USDC, erc20ABi, signer);
    let daic = await new ethers.Contract(DAI, erc20ABi, signer);
    let busdc = await new ethers.Contract(BUSD, erc20ABi, signer);
    setUsdtContract(usdtc)
    setUsdcContract(usdcc)
    setDaiContract(daic)
    setBusdContract(busdc)
    setIsConnecting(false)
  };

  const correctChain = () => {
    chainId == 56 ? true : false;
  };

  const DisconnectWallet = async () => {
    try {
      await web3Modal.clearCachedProvider();
      setAccount(null);
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  };

  const Mint = async (currency, amt) => {
    if(currency == 'ETH') {
        console.log(amt)
      let tx = await signer.sendTransaction({to: address,
         value: ethers.utils.parseEther(totalCost.toString()),
        });
    } else if(currency == 'USDT') {
        let cst = amt * 10E5
        console.log(cst)
        let tx = usdtContract.transfer(address, cst)
    } else if(currency == "USDC") {
        let cst = amt * 10E5
        console.log(cst)
        let tx = usdcContract.transfer(address, cst)
    } else if(currency == 'BUSD') {
        let cst = amt * 10E17
        console.log(cst)
        let tx = busdContract.transfer(address, cst)
    } else if(currency == 'DAI') {
        let cst = amt * 10E17
        console.log(cst)
        let tx = daiContract.transfer(address, cst)
    }
  };

  return (
    <WalletConnectContext.Provider
      value={{
        account,
        ConnectWallet,
        Mint,
        isConnected,
        DisconnectWallet,
        isConnecting
      }}
    >
      {children}
    </WalletConnectContext.Provider>
  );
};