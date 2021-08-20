import Head from 'next/head'

export default function Home() {

return (
<div id="body" className="">
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

  <div className="" id="Art">
    <img id="MainWelcomePhoto" src="/images/Welcome2.png"></img>
  </div>

  <div className="bg-gray-700 w-full shadow-md font-indie">
    <div className="flex items-center justify-between">
      <nav className="ml-4 md:ml-10 flex flex-wrap flex-row text-xl md:text-4xl">
        {/* <a href="/mint" className="text-4xl text-white hover:text-black m-6">MINT!</a> */}
        <a href="#roadmap" className="text-white hover:text-black m-6">Roadmap</a>
        <a href="#team" className=" text-white hover:text-black m-6">Team</a>
        <a href="#Gallery" className=" hidden md:block text-white hover:text-black m-6">Gallery</a>
        <a href="https://twitter.com/IceCreamNFT" className=" hover:text-white m-6 text-blau">twitter</a>
        <a href="https://discord.com/channels/876818020633313290/876819378623086624" className=" hover:text-white m-6 text-blau">discord</a>
      </nav>
      {/* <a href="/" className=""><img src="/images/Ice_Cream_gif.gif" width="240" alt="" className="logo-image" /></a> */}
    </div>
  </div>

  <div className="font-pacifico" id="about">
  
{/* -------------------------------------------------------------------- */}
    

    <div class="w-11/12 md:w-10/12 m-auto mt-10">
      <div id="countdown" className="p-0 content-center my-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-around items-center mt-8">
          <div className="items-center justify-center">
          <h1 className="text-center text-5xl md:text-8xl my-10 text-white font-indie text-blau">THE ICE CREAM PARLOR</h1>

            <div className="grid gap-4 sm:grid-cols-0 md:grid-cols-5">

              <div className="col-span-1 md:col-span-3 shadow-lg rounded-lg bg-gray-700 p-6">
                <h2 className="text-3xl text-gray-200 mt-3">Welcome to the new stadard of NTFs, we can't wait to see you all show your cones with pride! Relax! You've made it and the party starts soon!</h2>
                <div className="pl-auto">
                  <iframe className="block md:hidden" src="https://free.timeanddate.com/countdown/i7y0i6hp/n1170/cf12/cm0/cu4/ct2/cs1/ca0/co0/cr0/ss0/cacfff/cpcf00/pct/tcfff/fn3/fs200/szw256/szh108/iso2021-08-26T18:00:00" allowtransparency="true" frameborder="0" width="152" height="44"></iframe>
                  <iframe className="hidden md:block" src="https://free.timeanddate.com/countdown/i7y0i6hp/n1170/cf12/cm0/cu4/ct2/cs1/ca0/co0/cr0/ss0/cacfff/cpcf00/pct/tcfff/fn3/fs250/szw576/szh243/iso2021-08-26T18:00:00" allowtransparency="true" frameborder="0" width="428" height="121"></iframe>
                </div>
                <p className="text-2xl text-gray-200 my-6">
                  <strong>LAUNCH DATE:</strong> Thursday, 26 August 2021, 6pm EST. <br />‍
                  <span className="text-gray-200 text-2xl"><strong>TOTAL SUPPLY:</strong> 8888 Cones.<br/><strong>PRICE:</strong> 0.04 ETH each.</span>
                </p>
                {/* <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-06-29T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe> */}
              </div> 

              <div className="col-span-1 md:col-span-2">
                <img className="rounded-xl shadow-2xl" src="/images/NewGIF.gif"></img>
              </div>

            </div>

          </div>
        </div>
        
          <div className="flex flex-col items-center font-indie mt-10">
            {/* href="/mint" */}
            <a href="" className="animate-bounce shadow-lg Poppitandfinchsans text-4xl border-6 bg-blau rounded-lg text-white hover:text-black py-2 px-6 ">Mint!</a>
          </div>
      </div>
    </div>

{/* -------------------------------------------------------------------- */}

    <div id="roadmap" className="content-center">
      <img id="roadmap-img" className="pb-8 hidden md:block" src="/images/RoadmapNew.png"/>
      <img id="roadmap-img" className="pb-8 block md:hidden" src="/images/RoadmapMobileNew.png"/>
      <div class="px-10 md:px-40 bg-gray-700 shadow-lg p-4 rounded-t-3xl">

        <h2 className="text-3xl md:text-6xl text-center text-gray-200 font-frederick my-4">OUR VISION</h2>
        <p className="text-2xl text-white text-center my-6"> Simple. Our vision is to push the industry in the NFT space with all our crazy ideas and your positive vibes! Thanks!  
        </p>
        <p className="text-2xl text-white text-center my-6">No more cheap projects that were done in a week, no more rug pulls where a product is promised and poorly delivered. Our goal is to push everyone to do better than before on delivering a good product that has purpose! We're making something special!</p>
        <p className="text-2xl text-white text-center my-6">Get ready to stuff the worlds best ice cream cones in your back pocket!</p>

        <h2 className="text-3xl md:text-6xl text-center text-gray-200 font-frederick my-4">THE DIFFERENCE</h2>
        <p className="text-xl text-white text-center my-6 font-indie animate-pulse"><span className="text-3xl">O</span>VER <span className="text-3xl text-blau"> ONE MILLION </span> COMBINATIONS<span className="text-3xl">!</span></p>
        <p className="text-2xl text-white text-center my-6">Some of our cones have costumes. Each costume is randomized in and of itself. For example the pirates alone have more than 500 sexy variations! With 20+ costumes, multiple flavors, cone types, expressions, backgrounds and toppings each piece will truly be unique and look good too! ;)</p>
        <p className="text-xl text-white text-center my-6 font-indie animate-pulse"><span className="text-3xl">S</span>UPER RARE <span className="text-3xl text-blau"> DOUBLE CONES</span><span className="text-3xl">!</span></p>
        <p className="text-2xl text-white text-center my-6">We are pushing the industry by having an 8% chance when you mint you will get <span className="underline">TWO cones in one photo</span> instead of just one. Double cone photos coming to the ART GALLERY soon!</p>

        <h2 className="text-3xl md:text-6xl text-center text-gray-200 font-frederick my-4">GIVING BACK</h2>

        <p className="text-2xl text-white my-6">Fullfilling our roadmap will allow us to...</p>
        <ul className="">
          <li className="pl-6 text-2xl text-white my-6">1) We will donate to a charity chosen by our community!</li>
          <li className="pl-6 text-2xl text-white my-6">2) My beautiful people we have x8 ETH giveaways to give to you our amazing community!</li>
          <li className="pl-6 text-2xl text-white my-6">3) Launch our next project and really start to push the boundaries of NFTs! We have some <span className="text-3xl underline">CRAZY WACK</span> ideas we can't wait to give you!</li>  
          <li className="pl-6 text-2xl text-white my-6">4) We have set aside 88 NFTs just for you guys! #giveAways</li>  
        </ul>

        <p className="text-2xl text-white my-6"> In addition, we have been, and continue to make <span className="font-bold underline"> high quality content for the NFT community!</span>
        </p>

        <h2 className="text-3xl md:text-6xl text-center text-gray-200 font-frederick my-4 mt-10">WHY BACK US?</h2>
        <p className="text-2xl text-white text-center my-6">NO MORE UGLY ART!</p>
        <p className="text-2xl text-white text-center my-6"> After entering the NFT space we came to a conclusion. There are simply too many lazy projects! Not to mention, the art just looks too… random! We are sick and tired of clashing triple cheetah print robots… no artist would make that shit! We decided to make art that is intelligently designed. Art that is still randomized but will look good no matter how you put it! With this vision we are looking to raise the bar in the NFT space FOREVER!
        </p>
        <p className="text-2xl text-white text-center my-6">This is the new stadard of NTFs! Let's raise a cone to that!</p>

        <h2 className="text-3xl md:text-6xl text-center text-gray-200 font-frederick my-4">OUR GAURENTEE</h2>
        <p className="text-2xl text-white text-center my-6">We are in this for the long run!
        </p>
        <p className="text-2xl text-white text-center my-6">Our plan is to do a slow drop. Why over excite the market and jack up gas prices for no reason?
        </p>

      </div>
    </div>

{/* -------------------------------------------------------------------- */}

    <div id="team" className="text-white bg-gray-500 shadow-lg p-8">
      <h2 className="text-4xl md:text-7xl my-8 text-white font-frederick border-b-2 py-4">The Team</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <div className="">
          <h3 className="text-2xl font-indie">Meet Our Cone Heads!</h3>
          <p className="text-2xl my-4">We've assembled a team of the worlds top performing ice cream scoopers!</p>
          <p className="text-2xl">Let's not forget why we came togther! #IntoTheUnknown #ConeLife</p>
        </div>

        <div className="md:col-span-2 lg:col-span-1">  

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Jasmine.jpg"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-pacifico font-medium">Jasmine</p>
              <p class="font-pacifico">Art Director</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/FlowerConeNFT">@FlowerConeNFT</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Pirate.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">thepirateking</p>
              <p class="">Community Admin</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/NFTPirateKing">@NFTPirateKing</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Hippie.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">wellMadeMilkshakes</p>
              <p class="">Project Development</p>
              <p class="">Front End Developer</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/wellMadeShakes">@wellMadeShakes</a>
            </div>
          </div>  

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Mummy.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">TheScoopy1</p>
              <p class="">Marketing</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/TheScoopy1">@TheScoopy1</a>
            </div>
          </div> 

        </div>

        <div className="md:col-span-2 lg:col-span-1">

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Abby.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">Abby</p>
              <p class="">Senior Artist</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/UnderTheSeaNFT">@UnderTheSeaNFT</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Hoodie.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">Shaphan</p>
              <p class="">Consultant</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/ShaphanBowen">@ShaphanBowen</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Astronaut.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">MetaverseMogul</p>
              <p class="">Developer</p>
              <a class="text-lg text-blau font-indie" href="https://twitter.com/MetaverseMogul">@MetaverseMogul</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Shark.png"></img>
            </div>
            <div className="description col-span-2">
              <p class="text-xl font-medium">Annonymous</p>
              <p class="">Developer</p>
              {/* <a class="text-lg text-blau font-indie" href="https://twitter.com/MetaverseMogul">@MetaverseMogul</a> */}
            </div>
          </div>

        </div>
      </div>
    </div>

{/* -------------------------------------------------------------------- */}

<div id="Gallery" className="bg-gray-700 shadow-lg p-4">
    <h2 className="text-4xl md:text-7xl text-center my-8 text-gray-200 font-frederick">Art Gallery</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 p-2 items-center pb-4">
        <img className="rounded-md shadow-md" src="/images/gallery/Underwater-Scene-.png"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Sunflowers.png"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Locked.jpg"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Locked.jpg"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Locked.jpg"></img>
        <img className="rounded-md shadow-md" src="/images/gallery/Locked.jpg"></img>
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