import Head from 'next/head'

export default function Home() {

return (
<div id="body" className="flex flex-col items-center justify-center min-h-screen">
  <Head>
    <title>Ice Cream Parlor</title>
    <link rel="icon" href="/images/favicon.jpg" />

    <meta property="og:title" content="Ice Cream Parlor" key="ogtitle" />
    <meta property="og:description" content="Here at Boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS bananas out known to man." key="ogdesc" />
    <meta property="og:type" content="website" key="ogtype" />
    <meta property="og:url" content="https://boringbananas.co/" key="ogurl"/>
    <meta property="og:image" content="https://boringbananas.co/images/Hola.gif" key="ogimage"/>
    <meta property="og:site_name" content="https://boringbananas.co/" key="ogsitename" />

    <meta name="twitter:card" content="summary_large_image" key="twcard"/>
    <meta property="twitter:domain" content="boringbananas.co" key="twdomain" />
    <meta property="twitter:url" content="https://boringbananas.co/" key="twurl" />
    <meta name="twitter:title" content="Boring Bananas Co." key="twtitle" />
    <meta name="twitter:description" content="Here at boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS bananas out known to man." key="twdesc" />
    <meta name="twitter:image" content="https://boringbananas.co/images/Hola.gif" key="twimage" />
  </Head>

  <div className="" id="Art">
    <img id="MainWelcomePhoto" src="/images/Welcome2.png"></img>
  </div>

  <div className="bg-gray-700 w-full shadow-md font-indie">
    <div className="flex items-center justify-between">
      <nav className="ml-10 flex flex-wrap flex-row">
        {/* <a href="/mint" className="text-4xl text-white hover:text-black m-6">MINT!</a> */}
        <a href="#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a>
        <a href="#team" className="text-4xl text-white hover:text-black m-6">Team</a>
        <a href="#Gallery" className="text-4xl text-white hover:text-black m-6">Gallery</a>
        <a href="https://twitter.com/IceCreamNFT" className="text-4xl hover:text-white m-6 text-blau">twitter</a>
        <a href="https://discord.com/channels/876818020633313290/876819378623086624" className="text-4xl hover:text-white m-6 text-blau">discord</a>
      </nav>
      {/* <a href="/" className=""><img src="/images/Ice_Cream_gif.gif" width="240" alt="" className="logo-image" /></a> */}
    </div>
  </div>

  <div className="font-pacifico" id="about">
  
{/* -------------------------------------------------------------------- */}
    <div class="w-10/12 m-auto mt-10">
      <div id="countdown" className="py-6 content-center my-8 p-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-around items-center mt-8">
          <div className="w-3/4 text-center items-center justify-center">
            <h1 className="text-5xl my-10 text-white font-indie text-blau">THE ICE CREAM PARLOR</h1>
            <h2 className="text-3xl text-gray-200 ">IT'S HAPPENING!!! <br/><span className="">Be the first to mint your cone in ...</span></h2>
            <div className="pl-20">
              <iframe src="https://free.timeanddate.com/countdown/i7xx9koe/n1170/cf12/cm0/cu4/ct0/cs1/ca0/co0/cr0/ss0/cacfff/cpcf00/pct/tcfff/fn3/fs350/szw576/szh243/iso2021-08-24T18:00:00" allowtransparency="true" frameborder="0" width="658" height="170"></iframe>
            </div>
            <p className="text-2xl text-gray-200 my-6">
              <strong>LAUNCH DATE:</strong> Tuesday, 24 August 2021, 6pm EST. <br />‍
              <span className="text-gray-200 text-2xl"><strong>TOTAL SUPPLY:</strong> 8888 Cones.<br/><strong>PRICE:</strong> 0.04 ETH each.</span>
            </p>
            {/* <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-06-29T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe> */}

          </div>
        </div>

        <div className="flex flex-col items-center font-indie">
          {/* href="/mint" */}
          <a href="" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau rounded-lg text-white hover:text-black py-2 px-6 ">Mint!</a>
        </div> 
      </div>
    </div>

{/* -------------------------------------------------------------------- */}

    <div id="roadmap" className="border-t-2 p-4 content-center">
      <img id="roadmap-img" className="pb-8 " src="/images/Roadmap.png"/>
      <div class="px-40 bg-gray-700 shadow-lg p-4 rounded-t-3xl">

      <h2 className="text-6xl text-center text-gray-200 font-frederick my-4">OUR VISION!</h2>
      <p className="text-2xl text-white text-center my-6"> Simple. Our vision is to push the industry in the NFT space.  
      </p>
      <p className="text-2xl text-white text-center my-6">No more cheap projects that were done in a week, no more rug pulls where a product is promised and poorly delivered. NO MORE MONEY GRABS! Our goal is to push everyone to do better than before on delivering a good product that has purpose!</p>

      <h2 className="text-6xl text-center text-gray-200 font-frederick my-4">THE DIFFERENCE</h2>
      <p className="text-xl text-white text-center my-6 font-indie"><span className="text-3xl">O</span>VER <span className="text-3xl text-blau"> ONE MILLION </span> COMBINATIONS<span className="text-3xl">!</span></p>
      <p className="text-2xl text-white text-center my-6">Some of our cones have costumes. Each costume is randomized in and of itself. For example the pirates alone have more than 500 variations! With 20+ costumes, multiple flavors, cone types, expressions, backgrounds and toppings each piece will truly be unique and look good too! ;)</p>


      <h2 className="text-6xl text-center text-gray-200 font-frederick my-4">GIVING BACK</h2>

      <p className="text-2xl text-white my-6">Fullfilling our roadmap will allow us to...</p>
      <ul className="">
        <li className="pl-6 text-2xl text-white my-6">1) Donate 10 ETH to a charity chosen by our community!</li>
        <li className="pl-6 text-2xl text-white my-6">2) Give 8 giveaways of .8888 ETH to our amazing community!</li>
        <li className="pl-6 text-2xl text-white my-6">3) Launch our next project and really start to push the boundaries of NFTs!</li>  
      </ul>

      <p className="text-2xl text-white my-6"> In addition, we have been, and continue to make <span className="font-bold underline"> high quality content for the NFT community!</span>
      </p>

      <h2 className="text-6xl text-center text-gray-200 font-frederick my-4 mt-10">WHY BACK US?</h2>
      <p className="text-2xl text-white text-center my-6">NO MORE UGLY ART!</p>
      <p className="text-2xl text-white text-center my-6"> After entering the NFT space we came to a conclusion. There are simply too many lazy projects! Not to mention, the art just looks too… random! We are sick and tired of clashing triple cheetah print robots… no artist would make that shit! We decided to make art that is intelligently designed. Art that is still randomized but will look good no matter how you put it! With this vision we are looking to raise the bar in the NFT space FOREVER!
      </p>

    </div>
  </div>
      
{/* -------------------------------------------------------------------- */}

    <div id="team" className="text-white bg-gray-500 shadow-lg p-8">
      <h2 className="text-7xl my-8 text-white font-frederick border-b-2 py-4">The Team</h2>
      <div className="grid gap-4 grid-cols-3">
        <div className="">
          <h3 className="text-2xl font-indie">Meet Our Team!</h3>
          <p className="text-2xl my-4">Welcome! We are aspiring to create something truly special. We are here to raise the standards of the NFT community.</p>
          <p className="text-2xl">Let's not forget why we came togther! #IntoTheUnknown #ConeLife</p>
        </div>
        <div className="">  

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg" src="/images/profiles/Jasmine.jpg"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-pacifico font-medium">Jasmine</p>
              <p class="font-pacifico">Art Director</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/FlowerConeNFT">@FlowerConeNFT</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg" src="/images/profiles/Pirate.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">thepirateking</p>
              <p class="">Community Admin</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/NFTPirateKing">@NFTPirateKing</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg" src="/images/profiles/Hippie.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">wellMadeMilkshakes</p>
              <p class="">Project Development</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/wellMadeShakes">@wellMadeShakes</a>
            </div>
          </div>  

        </div>
        <div className="">

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg" src="/images/profiles/Abby.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">Abby</p>
              <p class="">Senior Artist</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/UnderTheSeaNFT">@UnderTheSeaNFT</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg" src="/images/profiles/Hoodie.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">Shaphan</p>
              <p class="">Marketing / Branding</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/ShaphanBowen">@ShaphanBowen</a>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* -------------------------------------------------------------------- */}

<div id="Gallery" className="bg-gray-700 shadow-lg p-4">
    <h2 className="text-7xl text-center my-8 text-gray-200 font-frederick">Art Gallery</h2>
      <div className="grid gap-4 grid-cols-3 p-2 items-center pb-4">
        <img className="rounded-md shadow-md" src="/images/gallery/Underwater-Scene-.png"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Template.png"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Template.png"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Template.png"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Template.png"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Template.png"></img>
      </div>
    </div>
{/* -------------------------------------------------------------------- */}

          <div id="contact" className="flex flex-wrap justify-around items-center bg-gray-900 py-6">
            <div className="flex flex-col justify-between py-6 ">
              <h2 className="text-blau text-3xl text-center font-indie">We'd Love to Hear From You!</h2>
              <p className="text-xl text-white my-6 montserrat">Reach out to us on Twitter <a className="text-blau underline font-bold" target="_blank" href="https://twitter.com/IceCreamNFT">@theIceCreamParlor</a><br/> 
              Or alternatively, join our <a className="text-bla underline font-bold" target="_blank" href="https://discord.com/channels/876818020633313290/876819378623086624">Discord Server</a>.
              </p>
            </div>
          </div>   
      </div>  
    </div>  
    )
  }