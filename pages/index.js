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
    <img id="MainWelcomePhoto" src="/images/Banner.jpg"></img>
  </div>

  <div className="bg-gray-700 w-full shadow-md font-indie">
    <div className="flex items-center justify-between">
      <nav className="m-auto flex flex-wrap flex-row text-xl md:text-4xl">
        <a href="#" className="hidden md:block text-white hover:text-black m-6">Home</a>
        <a href="#team" className="hidden md:block text-white hover:text-black m-6">Team</a>
        <a href="https://theicecreamparlor.io/roadmap" className="text-white hover:text-black m-6">Roadmap</a>
        <a href="https://theicecreamparlor.io/mint" className="text-white hover:text-black m-6">MINT!</a>
        <a href="https://twitter.com/IceCreamNFT" target="_blank" className=" hover:text-white m-6 text-blau">twitter</a>
        <a href="https://discord.com/invite/BhYadTj2KD" target="_blank" className=" hover:text-white m-6 text-blau">discord</a>
        <a href="https://opensea.io/collection/theicecreamparlor" target="_blank" className=" hover:text-white m-6 text-blau">opensea</a>
      </nav>
    </div>
  </div>

  <div className="font-pacifico" id="about">
  
{/* -------------------------------------------------------------------- */}
    

    <div className="w-11/12 md:w-10/12 m-auto mt-10">
      <div id="countdown" className="p-0 content-center my-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-around items-center mt-8">
          <div className="items-center justify-center">
          <h1 className="text-center text-5xl md:text-8xl my-10 text-white font-indie text-blau">THE ICE CREAM PARLOR</h1>

            <div className="grid gap-4 sm:grid-cols-0 md:grid-cols-5">

              <div className="col-span-1 md:col-span-3 shadow-lg rounded-lg bg-gray-700 p-6">
                <h2 className="text-3xl text-gray-200 mt-3">Welcome to the new standard of NFTs, we can't wait to see you all show your cones with pride! Relax! You've made it and the party starts soon!</h2>
                <div className="pl-auto">
                  <iframe className="block md:hidden" src="https://free.timeanddate.com/countdown/i7ybsbfz/n1170/cf12/cm0/cu4/ct2/cs1/ca0/co0/cr0/ss0/caceee/cpc900/pct/tcfff/fn3/fs300/szw256/szh108/iso2021-08-30T20:00:00" allowtransparency="true" frameBorder="0" width="228" height="65"></iframe>
                  <iframe className="hidden md:block" src="https://free.timeanddate.com/countdown/i7ybsbfz/n1170/cf12/cm0/cu4/ct2/cs1/ca0/co0/cr0/ss0/caceee/cpc900/pct/tcfff/fn3/fs300/szw576/szh243/iso2021-08-30T20:00:00" allowtransparency="true" frameBorder="0" width="514" height="146"></iframe>
                </div>
                <p className="text-2xl text-gray-200 my-6">
                  <strong>LAUNCH DATE:</strong> Monday the 30th of August 2021, 8pm EST. <br />‍
                  <span className="text-gray-200 text-2xl"><strong>TOTAL SUPPLY:</strong> 8888 Cones.<br/><strong>PRICE:</strong> 0.04 ETH each.</span>
                </p>
              </div> 

              <div className="col-span-1 md:col-span-2">
                <img className="rounded-xl shadow-2xl" src="/images/FastGIF.gif"></img>
              </div>

            </div>

          </div>
        </div>
        
          <div className="flex flex-col items-center font-indie mt-10">
            {/* href="/mint" */}
            <a href="/mint" className="animate-bounce shadow-lg Poppitandfinchsans text-4xl border-6 bg-blau rounded-lg text-white hover:text-black py-2 px-6 ">MINT!</a>
          </div>
      </div>
    </div>

{/* -------------------------------------------------------------------- */}

    <div id="roadmap" className="content-center">
      <img id="roadmap-img" className="p-8 hidden md:block" src="/images/FinalMap.png"/>
      <img id="roadmap-img" className="pb-8 block md:hidden" src="/images/FinalMapMobile.png"/>

      <div className="flex flex-col items-center font-indie shadow-lg py-10">
        <a href="https://theicecreamparlor.io/roadmap" className="animate-bounce shadow-lg Poppitandfinchsans text-4xl border-6 bg-blau rounded-lg text-white hover:text-black py-2 px-6 ">Read More!</a>
      </div>

      <div className="px-10 md:px-40 bg-gray-700 shadow-lg p-4 rounded-t-3xl">

        <h2 className="text-4xl md:text-6xl text-center text-gray-200 font-frederick my-4">OUR VISION</h2>
        <p className="text-2xl text-white text-center my-6"> Simple. Our vision is to push the industry in the NFT space!  
        </p>
        <p className="text-2xl text-white text-center my-6">No more cheap projects that were done in a week, no more rug pulls where a product is promised and poorly delivered. Our goal is to push everyone to do better than before on delivering a good product that has purpose! We're making something special!</p>
        <p className="text-2xl text-white text-center my-6">Get ready to stuff the worlds best ice cream cones in your back pocket!</p>

        <h2 className="text-4xl md:text-6xl text-center text-gray-200 font-frederick my-4">THE DIFFERENCE</h2>
        
        <p className="text-xl text-white text-center my-6 font-indie animate-pulse"><span className="text-3xl">O</span>VER <span className="text-3xl text-blau"> ONE MILLION </span> COMBINATIONS<span className="text-3xl">!</span></p>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-5">
          <div className="md:hidden block"></div>
          <img className="rounded-md shadow-md col-span-2 md:col-span-1" src="/images/PirateGIF.gif"></img>
          <p className="text-2xl text-white text-center md:text-left my-6 col-span-4">Some of our cones have costumes. Each costume is randomized in and of itself. For example the pirates alone have more than 500 cute variations! With 20+ costumes/toppings, multiple flavors, cone types, expressions, backgrounds and toppings each piece will truly be unique and look good too! ;)</p>
        </div>

        <p className="text-xl text-white text-center my-6 font-indie animate-pulse"><span className="text-3xl">S</span>UPER RARE <span className="text-3xl text-blau"> DOUBLE CONES</span><span className="text-3xl">!</span></p>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-5">
          <div className="md:hidden block"></div>
          <img className="rounded-md shadow-md col-span-2 md:col-span-1" src="/images/gallery/Double-Cone-Sneak-Peak.png"></img>
          <p className="text-2xl text-white text-center md:text-left my-6 col-span-4">We are pushing the industry by having an 8% chance when you mint you will get <span className="underline">TWO cones in one photo</span> instead of just one. Double cone photos coming to the ART GALLERY soon!</p>
        </div>

        <p className="text-xl text-white text-center my-6 font-indie animate-pulse"><span className="text-3xl">R</span>EWARDS AND <span className="text-3xl text-blau">RECIPES</span><span className="text-3xl">!</span></p>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-5">
          <div className="md:hidden block"></div>
          <img className="rounded-md shadow-md col-span-2 md:col-span-1" src="/images/Small.gif"></img>
          <p className="text-2xl text-white text-center md:text-left my-6 col-span-4">After sell out we will be airdropping recipes to our cone holders! With your recipes in hand you will get access to the <a href="#roadmap" className="text-blau underline">Ice Cream Factory</a>! A place where you can mix and match recipes to change you existing cones in all kinds of cute and crazy ways!</p>
        </div>


        <h2 className="text-4xl md:text-6xl text-center text-gray-200 font-frederick my-4">GIVING BACK</h2>

        <p className="text-2xl text-white my-6">Fullfilling our roadmap will allow us to...</p>
        <ul className="">
          <li className="pl-6 text-2xl text-white my-6">1) We will donate to a charity chosen by our community!</li>
          <li className="pl-6 text-2xl text-white my-6">2) My beautiful people we have x8 ETH giveaways to give to you our amazing community!</li>
          <li className="pl-6 text-2xl text-white my-6">3) Launch our next project and really start to push the boundaries of NFTs! We have some <span className="text-3xl underline">CRAZY WACK</span> ideas we can't wait to give you!</li>  
          <li className="pl-6 text-2xl text-white my-6">4) We have set aside 88 NFTs just for you guys! #giveAways</li>  
        </ul>

        <p className="text-2xl text-white my-6"> In addition, we have been, and continue to make <span className="font-bold underline"> high quality content for the NFT community!</span>
        </p>

        <h2 className="text-4xl md:text-6xl text-center text-gray-200 font-frederick my-4 mt-10">WHY BACK US?</h2>
        <p className="text-2xl text-white text-center my-6">NO MORE UGLY ART!</p>
        <p className="text-2xl text-white text-center my-6"> After entering the NFT space we came to a conclusion. There are simply too many lazy projects! Not to mention, the art just looks too… random! We are sick and tired of clashing triple cheetah print robots… no artist would make that! The art is good but the individual items clash! We want all our cone holders to have a picture worthy of your profile! Thats the #coneStandard! We decided to make art that is intelligently designed. Art that is still randomized but will look good no matter how you put it! With this vision we are looking to raise the bar in the NFT space FOREVER!
        </p>
        <p className="text-2xl text-white text-center my-6">This is the new standard of NTFs! Let's raise a cone to that!</p>

        <h2 className="text-4xl md:text-6xl text-center text-gray-200 font-frederick my-4">OUR GUARENTEE</h2>
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
          <p className="text-2xl">Let's not forget why we came together! #IntoTheUnknown #ConeLife</p>
        </div>

        <div className="md:col-span-2 lg:col-span-1">  

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Jasmine.jpg"></img>
            </div>
            <div className="description col-span-2">
              <p className="text-xl font-pacifico font-medium">Jasmine</p>
              <p className="font-pacifico">Art Director</p>
              <a className="text-lg text-blau font-indie" target="_blank" href="https://twitter.com/FlowerConeNFT">@FlowerConeNFT</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Pirate.png"></img>
            </div>
            <div className="description col-span-2">
              <p className="text-xl font-medium">thepirateking</p>
              <p className="">Community Admin</p>
              <a className="text-lg text-blau font-indie" target="_blank" href="https://twitter.com/NFTPirateKing">@NFTPirateKing</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Hippie.png"></img>
            </div>
            <div className="description col-span-2">
              <p className="text-xl font-medium">wellMadeMilkshakes</p>
              <p className="">Project Development</p>
              <p className="">Front End Developer</p>
              <a className="text-lg text-blau font-indie" target="_blank" href="https://twitter.com/wellMadeShakes">@wellMadeShakes</a>
            </div>
          </div>  

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Mummy.png"></img>
            </div>
            <div className="description col-span-2">
              <p className="text-xl font-medium">TheScoopy1</p>
              <p className="">Marketing</p>
              <a className="text-lg text-blau font-indie" target="_blank" href="https://twitter.com/TheScoopy1">@TheScoopy1</a>
            </div>
          </div> 

        </div>

        <div className="md:col-span-2 lg:col-span-1">

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Abby.png"></img>
            </div>
            <div className="description col-span-2">
              <p className="text-xl font-medium">Abby</p>
              <p className="">Senior Artist</p>
              <a className="text-lg text-blau font-indie" target="_blank" href="https://twitter.com/UnderTheSeaNFT">@UnderTheSeaNFT</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Hoodie.png"></img>
            </div>
            <div className="description col-span-2">
              <p className="text-xl font-medium">Shaphan</p>
              <p className="">Consultant</p>
              <a className="text-lg text-blau font-indie" target="_blank" href="https://twitter.com/ShaphanBowen">@ShaphanBowen</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Astronaut.png"></img>
            </div>
            <div className="description col-span-2">
              <p className="text-xl font-medium">MetaverseMogul</p>
              <p className="">Developer</p>
              <a className="text-lg text-blau font-indie" target="_blank" href="https://twitter.com/MetaverseMogul">@MetaverseMogul</a>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 p-2 items-center">
            <div className="image">
              <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Shark.png"></img>
            </div>
            <div className="description col-span-2">
              <p className="text-xl font-medium">BennaginsETH</p>
              <p className="">Developer</p>
              <a className="text-lg text-blau font-indie" target="_blank" href="https://twitter.com/BennaginsETH">@BennaginsETH</a>
            </div>
          </div>

        </div>
      </div>
    </div>

{/* -------------------------------------------------------------------- */}

<div id="Gallery" className="bg-gray-700 shadow-lg p-4">
    <h2 className="text-4xl md:text-7xl text-center my-8 text-gray-200 font-frederick">Art Gallery</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-6 p-2 items-center pb-4">
        <img className="rounded-md shadow-md col-span-2" src="/images/gallery/Underwater-Scene-.png"></img>
        <img className="rounded-md shadow-md col-span-2" src="/images/gallery/Sunflowers.png"></img>
        <img className="rounded-md shadow-md col-span-2" src="/images/gallery/Wedding_Scene.png"></img>
        <img className="rounded-md shadow-md col-span-2" src="/images/gallery/Women_Scene.png"></img>
        <img className="rounded-md shadow-md col-span-2" src="/images/gallery/Disco.png"></img>
        <img className="rounded-md shadow-md col-span-2" src="/images/gallery/Graveyard.jpg"></img>
        <img className="rounded-md shadow-md col-span-2" src="/images/gallery/Candy_Land.png"></img>
        <img className="rounded-md shadow-md col-span-2" src="/images/gallery/City_Background_.png"></img>
        <img className="rounded-md shadow-md col-span-2" src="/images/gallery/Locked.jpg"></img>
      </div>
    </div>
{/* -------------------------------------------------------------------- */}

      <div className="flex flex-col items-center font-indie shadow-lg py-10 bg-gray-700">
        {/* href="/mint" */}
        <a href="https://discord.com/invite/BhYadTj2KD" target="_blank" className="animate-bounce shadow-lg Poppitandfinchsans text-4xl border-6 bg-gray-500 rounded-lg text-white hover:text-black py-2 px-6 ">See More On Discord!</a>
      </div>

      <div id="contact" className="flex flex-wrap justify-around items-center bg-gray-900 py-6">
        <div className="flex flex-col justify-between py-6 ">
          <h2 className="text-blau text-3xl text-center font-indie">We'd Love to Hear From You!</h2>
          <p className="text-xl text-white my-6 montserrat">Reach out to us on Twitter <a className="text-blau underline font-bold" target="_blank" href="https://twitter.com/IceCreamNFT">@theIceCreamParlor</a><br/> 
          Or alternatively, join our <a className="text-bla underline font-bold" target="_blank" href="https://discord.com/invite/BhYadTj2KD">Discord Server</a>.
          </p>
        </div>
      </div>   
  </div>  
</div>  
)
}