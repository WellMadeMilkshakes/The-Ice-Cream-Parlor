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
        <a href="/" className="text-white hover:text-black m-6">Home</a>
        <a href="https://theicecreamparlor.io/#team" className="hidden md:block text-white hover:text-black m-6">Team</a>
        <a href="/roadmap" className="hidden md:block text-white hover:text-black m-6">Roadmap</a>
        <a href="/mint" className="text-white hover:text-black m-6">MINT!</a>
        <a href="https://twitter.com/IceCreamNFT" target="_blank" className=" hover:text-white m-6 text-blau">twitter</a>
        <a href="https://discord.com/channels/876818020633313290/876819378623086624" target="_blank" className=" hover:text-white m-6 text-blau">discord</a>
      </nav>
    </div>
  </div>


  <div id="Rewards" className="content-center font-pacifico">
    <div className="w-11/12 m-auto mb-10">
        <h2 className="text-4xl md:text-6xl text-center text-gray-200 font-frederick my-4">REWARDS</h2>
        <p className="text-xl text-white text-center my-6 font-indie animate-pulse"><span className="text-3xl">L</span>OYALTY <span className="text-3xl">C</span>ARDS <span className="text-3xl">!</span></p>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-5 bg-gray-700 rounded-3xl p-4 shadow-lg">
            <div className="md:hidden block"></div>
            <img className="rounded-full col-span-2 md:col-span-1" src="/images/Loyalty_Card.png"></img>
            <div className="col-span-4">
            <p className="text-2xl text-white text-center md:text-left my-6">This reward is the perfect gift to those who came to add a cone to their collection and who support the community one cone at a time!</p>
            <p className="text-2xl text-white text-center md:text-left my-6">- Hold 1 cone to get a loyalty card NFT!</p>
            <p className="text-2xl text-white text-center md:text-left my-6">- Each loyalty card will allow you to use the <span className="underline">Ice Cream Factory</span> 4 times!</p>
            </div>
        </div>

        <p className="text-xl text-white text-center my-6 font-indie animate-pulse"><span className="text-3xl">I</span>CE <span className="text-3xl">C</span>REAM <span className="text-3xl">S</span>TANDS<span className="text-3xl">!</span></p>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-5 bg-gray-700 rounded-3xl p-4 shadow-lg">
            <div className="md:hidden block"></div>
            <img className="rounded-full col-span-2 md:col-span-1" src="/images/Cart.png"></img>
            <div className="col-span-4">
            <p className="text-2xl text-white text-center md:text-left my-6">This is the perfect reward for the NFT investor! This package is perfect for those who want to flip NFTs, as well as collect a few on the way!</p>
            <p className="text-2xl text-white text-center md:text-left my-6">- Hold 6 cones to get an ice cream cart NFT!</p>
            <p className="text-2xl text-white text-center md:text-left my-6">- Each ice cream cart will allow you to use the <span className="underline">Ice Cream Factory</span> 8 times!</p>
            </div>
        </div>

        <p className="text-xl text-white text-center my-6 font-indie animate-pulse"><span className="text-3xl">I</span>CE <span className="text-3xl">C</span>REAM <span className="text-3xl">T</span>RUCKS<span className="text-3xl">!</span></p>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-5 bg-gray-700 rounded-3xl p-4 shadow-lg">
            <div className="md:hidden block"></div>
            <img className="rounded-full col-span-2 md:col-span-1" src="/images/Truck.png"></img>
            <div className="col-span-4">
            <p className="text-2xl text-white text-center md:text-left my-6">Our ice cream trucks were made for only the most serious investors. Those who fully believe in the #coneStandard and want to spread the joy and love to as many inner fat kids as possible!</p>
            <p className="text-2xl text-white text-center md:text-left my-6">- Hold 15 cones to get yourself an ice cream truck NFT!</p>
            <p className="text-2xl text-white text-center md:text-left my-6">- Each ice cream truck will allow you to use the <span className="underline">Ice Cream Factory</span> 15 times!</p>
            </div>
        </div>
    </div>

      <div class="px-10 md:px-40 bg-gray-700 shadow-lg p-4 rounded-t-3xl">

        <h2 className="text-4xl md:text-6xl text-center text-gray-200 font-frederick my-4">RECIPES</h2>

        <p className="text-2xl text-white my-6">We will be airdropping 5 types of recipes you can use in our Ice Cream Factory to create your very own original ice cream cones! Each recipe will alter a significant element of an ice cream cone! It is up to you to craft the world's best using the recipes you collect!</p>
        <p className="text-2xl text-white my-6">The five main elements to make a worthy ice cream cone:</p>
        <ul className="">
          <li className="pl-6 text-2xl text-white my-6">1) Taste - Yummm!</li>
          <li className="pl-6 text-2xl text-white my-6">2) Atmosphere - The best ambiance to enjoy a delicious cone!</li>
          <li className="pl-6 text-2xl text-white my-6">3) Theme - Set the mood and the emotion!</li>  
          <li className="pl-6 text-2xl text-white my-6">4) Quantity - Sometimes more is just better!</li>  
          <li className="pl-6 text-2xl text-white my-6">5) Top Secret Ingridents - All the best cones have em ;)</li>  
        </ul>

        <h2 className="text-4xl md:text-6xl text-center  text-gray-200 font-frederick my-4 mt-10">THE ICE CREAM FACTORY</h2>
        <div className="bg-gray-500 rounded-3xl p-6 shadow-lg text-center">
            <p className="text-2xl text-white my-6">Opening date will be announced after we sell out!</p>
            <p className="text-2xl text-white my-6">Welcome to the ICE CREAM FACTORY! Very few have ever seen inside but you, you are a cone holder and so you get exclusive access!</p>
            <p className="text-2xl text-white my-6">While in the Ice Cream Factory, you will be able to use the recipes you have been airdropped and any additional recipes you've collected to create your own original ice cream cones! The limit is your imagination, and we can't wait to see what you create!</p>
        </div>
      </div>
    </div>


    <div className="flex flex-col items-center font-indie shadow-lg py-10 bg-gray-700">
        {/* href="/mint" */}
        <a href="https://discord.com/channels/876818020633313290/876819378623086624" target="_blank" className="animate-bounce shadow-lg Poppitandfinchsans text-4xl border-6 bg-gray-500 rounded-lg text-white hover:text-black py-2 px-6 ">See More On Discord!</a>
    </div>

    <div id="contact" className="flex flex-wrap justify-around items-center bg-gray-900 py-6">
        <div className="flex flex-col justify-between py-6 ">
            <h2 className="text-blau text-3xl text-center font-indie">We'd Love to Hear From You!</h2>
            <p className="text-xl text-white my-6 montserrat">Reach out to us on Twitter <a className="text-blau underline font-bold" target="_blank" href="https://twitter.com/IceCreamNFT">@theIceCreamParlor</a><br/> 
            Or alternatively, join our <a className="text-bla underline font-bold" target="_blank" href="https://discord.com/channels/876818020633313290/876819378623086624">Discord Server</a>.
            </p>
        </div>
    </div>  

</div>
)
}