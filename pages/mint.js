import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_bananas, set_how_many_bananas] = useState(1)

  const [bananaContract, setBananaContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [bananaPrice, setBananaPrice] = useState(0)

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
    const bananaContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setBananaContract(bananaContract)

    const salebool = await bananaContract.methods.saleIsActive().call() 
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await bananaContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const bananaPrice = await bananaContract.methods.bananaPrice().call() 
    setBananaPrice(bananaPrice)
   
  }
  
  async function mintBanana(how_many_bananas) {
    if (bananaContract) {
 
      const price = Number(bananaPrice)  * how_many_bananas 

      const gasAmount = await bananaContract.methods.mintBoringBanana(how_many_bananas).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      bananaContract.methods
            .mintBoringBanana(how_many_bananas)
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


    <div>
      <div className="flex items-center justify-between w-full shadow-lg pb-6 font-indie bg-gray-700">
        <nav className="ml-4 md:ml-10 flex flex-wrap flex-row text-xl md:text-4xl">
          {/* <a href="/mint" className="text-4xl text-white hover:text-black m-6">MINT!</a> */}
          <a href="#roadmap" className="text-white hover:text-black m-6">Roadmap</a>
          <a href="#team" className=" text-white hover:text-black m-6">Team</a>
          <a href="#Gallery" className=" hidden md:block text-white hover:text-black m-6">Gallery</a>
          <a href="https://twitter.com/IceCreamNFT" className=" hover:text-white m-6 text-blau">twitter</a>
          <a href="https://discord.com/channels/876818020633313290/876819378623086624" className=" hover:text-white m-6 text-blau">discord</a>
        </nav>       
      </div>

      <div className="flex auth my-8 font-bold  justify-center items-center vw2">
        {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
        :
        <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
      </div>
    </div>

    <div className="md:w-2/3 w-4/5">
      <div className="mt-6 border-b-2 py-6">
        <div className="flex flex-col items-center">
          <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL CONES MINTED:  <span className="text-blau text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 8888</span></span>
          <div id="mint" className="flex justify-around  mt-8 mx-6">
          <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">GIMME</span>
          <input 
            type="number" 
            min="1"
            max="20"
            value={how_many_bananas}
            onChange={ e => set_how_many_bananas(e.target.value) }
            name="" 
            className="Poppitandfinchsans pl-4 text-4xl inline bg-grey-lighter py-2 rounded text-grey-darkest font-bold"
          />

          <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold"> ICE CREAM CONES!</span>
        </div>

            {saleStarted ? 
            <button onClick={() => mintBanana(how_many_bananas)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">MINT {how_many_bananas} bananas for {(bananaPrice * how_many_bananas) / (10 ** 18)} ETH + GAS</button>        
              : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
        
          }
                
        </div> 
      </div>
    </div>  
  </div>  
  )
}