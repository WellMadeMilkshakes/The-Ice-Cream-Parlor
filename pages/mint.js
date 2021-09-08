import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_cones, set_how_many_cones] = useState(1)

  const [coneContract, setConeContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [conePrice, setConePrice] = useState(0)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const coneContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setConeContract(coneContract)

    const salebool = await coneContract.methods.saleIsActive().call()
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await coneContract.methods.totalSupply().call()
    setTotalSupply(totalSupply)

    const conePrice = await coneContract.methods.IcecreamConePrice().call()
    setConePrice(conePrice)
  }
  
  async function mintCone(how_many_cones) {
    if (coneContract) {
 
      const price = Number(conePrice)  * how_many_cones

      const gasAmount = await coneContract.methods.mintIcecreamCones(how_many_cones).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      coneContract.methods
            .mintIcecreamCones(how_many_cones)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };

  



return (
  <div id="body" className="font-pacifico">
    <Head>
      <title>Ice Cream Parlor</title>
      <link rel="icon" href="/images/favicon.jpg" />

      <meta property="og:title" content="Ice Cream Parlor" key="ogtitle" />
      <meta property="og:description" content="Welcome to the Ice Cream Parlor" key="ogdesc" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content="https://theicecreamparlor.io/" key="ogurl"/>
      <meta property="og:image" content="https://theicecreamparlor.io/images/profile/Hippie.png" key="ogimage"/>
      <meta property="og:site_name" content="https://theicecreamparlor.io/" key="ogsitename" />

      <meta name="twitter:card" content="summary_large_image" key="twcard"/>
      <meta property="twitter:domain" content="theicecreamparlor.io" key="twdomain" />
      <meta property="twitter:url" content="https://theicecreamparlor.io/" key="twurl" />
      <meta name="twitter:title" content="The Ice Cream Parlor" key="twtitle" />
      <meta name="twitter:description" content="Welcome to the Ice Cream Parlor" key="twdesc" />
      <meta name="twitter:image" content="https://theicecreamparlor/images/profile/Hippie.png" key="twimage" />
    </Head>

    <div className="bg-porple" id="MintNow">
      <img src="/images/new/FROSTING_1.png"></img>

      <div className="grid grid-cols-5 gap-4 w-9/12 m-auto absolute top-0">
        <a className="col-span-1 m-3 hover:m-0" href="/">
          <img src="/images/new/home.png"></img>
        </a>
      </div>

      <div className="flex auth my-8 font-arial justify-center items-center vw2">
        {!signedIn ? <button onClick={signIn} className="text-porple inline-block rounded bg-white border-opacity-100 no-underline py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">connect to metamask</button>
        :
        <button onClick={signOut} className="text-w inline-block rounded no-underline p-6 px-4 mx-4 shadow-lg bg-blue-500 hover:bg-blue-400 text-gray-100">Wallet Connected: {walletAddress}</button>}
      </div>

      <div className="w-4/5 m-auto bg-mint mb-4 shadow-lg rounded-xl">
        <div className="mt-6 py-6">
          <div className="flex flex-col items-center mb-6">
            <span className="flex Poppitandfinchsans text-2xl md:text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL CONES MINTED: &nbsp;<span className="text-white font-arial text-2xl md:text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 8888</span></span>
            <div id="mint" className="flex justify-around  mt-8 mx-6">
              <span className="flex Poppitandfinchsans text-3xl md:text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">GIMME</span>
              <input 
                type="number" 
                min="1"
                max="20"
                value={how_many_cones}
                onChange={ e => set_how_many_cones(e.target.value) }
                name="" 
                className="Poppitandfinchsans pl-4 text-3xl md:text-4xl inline bg-grey-lighter py-2 rounded text-grey-darkest font-bold"
              />

              <span className="flex Poppitandfinchsans text-3xl md:text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold"> CONES!</span>
            </div>

            {saleStarted ? 
            <button onClick={() => mintCone(how_many_cones)} className="mt-4 font-arial text-xl md:text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">MINT {how_many_cones} Cones for {(conePrice * how_many_cones) / (10 ** 18)} ETH + GAS</button>
              : <button className="mt-4 font-arial text-xl md:text-2xl border-6 bg-punk rounded-lg text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
        
            }
                  
          </div> 
        </div>
      </div>

      <img src="/images/new/FROSTING_2.png"></img>

    </div>
  </div>  
  )
}