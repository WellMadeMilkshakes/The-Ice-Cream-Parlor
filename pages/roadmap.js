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
    <img id="MainWelcomePhoto" src="/images/Banner.png"></img>
  </div>

  <div className="bg-gray-700 w-full shadow-md font-indie">

    <div className="flex items-center justify-between">
      <nav className="ml-4 md:ml-10 flex flex-wrap flex-row text-xl md:text-4xl">
        {/* <a href="/mint" className="text-4xl text-white hover:text-black m-6">MINT!</a> */}
        <a href="#roadmap" className="text-white hover:text-black m-6">Roadmap</a>
        <a href="#team" className=" text-white hover:text-black m-6">Team</a>
        <a href="#Gallery" className=" hidden md:block text-white hover:text-black m-6">Gallery</a>
        <a href="https://twitter.com/IceCreamNFT" target="_blank" className=" hover:text-white m-6 text-blau">twitter</a>
        <a href="https://discord.com/channels/876818020633313290/876819378623086624" target="_blank" className=" hover:text-white m-6 text-blau">discord</a>
      </nav>
      {/* <a href="/" className=""><img src="/images/Ice_Cream_gif.gif" width="240" alt="" className="logo-image" /></a> */}
    </div>

  </div>
</div>
)
}