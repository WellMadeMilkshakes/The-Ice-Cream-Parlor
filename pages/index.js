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

  <div className="bg-punk" id="WelcomeNav">

    <div className="grid grid-cols-3 md:grid-cols-10 w-11/12 m-auto py-10">

      <div className="hidden md:block col-span-7 text-white text-6xl my-10">
        <h2 className="font-indie">THE ICE CREAM PARLOR</h2>
      </div>

      <div className="col-span-1 m-3 hover:m-0">
        <a href="https://twitter.com/IceCreamNFT" target="_blank">
          <img src="/images/new/twitter.png"></img>
        </a>
      </div>

      <div className="col-span-1 m-3 hover:m-0">
        <a href="https://discord.com/invite/BhYadTj2KD" target="_blank">
          <img src="/images/new/discord.png"></img>
        </a>
      </div>

      <div className="col-span-1 m-3 hover:m-0">
        <a href="https://opensea.io/collection/theicecreamparlor" target="_blank">
          <img src="/images/new/opensea.png"></img>
        </a>
      </div>

      <div className="block md:hidden col-span-3 text-white text-4xl my-10 text-center">
        <h2 className="font-indie">THE ICE CREAM PARLOR</h2>
      </div>

    </div>

  

  <img src="/images/new/BANNER.png"></img>

  </div>

  <div className="bg-porple" id="MintNow">
    <img src="/images/new/FROSTING_1.png"></img>

    <div className="grid gap-9 grid-cols-1 md:grid-cols-2 w-9/12 mx-auto mt-10">

      <div className="col-span-1 rounded-3xl border-8 border-white bg-gray-200">
        <img className="rounded-3xl" src="/images/new/nobg.gif"></img>
      </div>

      <div className="mt-10 col-span-1 mx-auto">
        <a href="/mint" className="font-arial shadow-lg Poppitandfinchsans text-3xl md:text-7xl bg-white rounded-2xl text-mint py-2 px-6 hover:bg-gray-200">MINT NOW</a>
        <p className="text-white text-2xl pt-10 text-center">The Ice Cream Parlor is a collection of 8,888 generated ice cream cones on the Ethereum blockchain. Come stuff your face with 200 plus unique traits! Join us on our mission to bring communities together one ice cream cone at a time! We scream, you scream, we all scream for ice cream!</p>
      </div>

    </div>

    <img src="/images/new/FROSTING_2.png"></img>
  </div>

  <div className="bg-mint" id="Roadmap">
    <img src="/images/new/FROSTING_1_FLIP.png"></img>

    <h1 className="text-center text-white text-5xl md:text-8xl pt-5 font-arial m-auto">ROADMAP</h1>
    <img id="roadmap-img" className="p-8 hidden md:block" src="/images/FinalMap.png"/>
    <img id="roadmap-img" className="pb-8 block md:hidden" src="/images/FinalMapMobile.png"/>

    <img src="/images/new/FROSTING_2_FLIP.png"></img>
  </div>

  <div className="bg-white" id="Scoop">
    <h1 className="text-center text-mint text-5xl md:text-8xl py-5 font-arial">THE SCOOP</h1>
    <p className="text-mint text-xl md:text-3xl text-center w-8/12 m-auto">Once upon a scoop, in a bucket not 
    too far away, in the land of freezers. There was a cone who aspired to be more than just cream in a box. 
    With determination and extreme force, our hero became the scoop of ice cream that they wanted to be. With 
    their goal accomplished they aspired to spread their happiness to the world. One scoop at a time. As they 
    saves up for their ice cream truck, the word begins to spread across the opensea about their fame and idea 
    to start their own icecream factory! Join them in their epic quest to find all the legendary flavors and 
    toppings across the world!</p>
  </div>

  <div className="bg-punk text-white" id="Team">
    <img src="/images/new/FROSTING_1.png"></img>

    <h1 className="text-center text-white text-5xl md:text-8xl py-10 font-arial">TEAM</h1>

    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-9/12 m-auto">
      <div className="md:col-span-2 lg:col-span-1">  

        <div className="grid gap-4 grid-cols-3 p-2 items-center">
          <div className="image">
            <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Jasmine.jpg"></img>
          </div>
          <div className="description col-span-2">
            <p className="text-xl font-medium">Jasmine</p>
            <p className="">Art Director</p>
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

        <div className="grid gap-4 grid-cols-3 p-2 items-center">
          <div className="image">
            <img className="rounded-full shadow-lg hover:animate-spin" src="/images/profiles/Hoodie.png"></img>
          </div>
          <div className="description col-span-2">
            <p className="text-xl font-medium">Anonymous</p>
            <p className="">Consultant</p>
          </div>
        </div>
      </div>
    </div>

    <img src="/images/new/FROSTING_2.png"></img>
  </div>

</div>  
)
}