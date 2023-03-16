import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Game } from '../components/Game';

const head = {
  title: "Arcade - The Metakey",
  description: "",
  image: "",
  keywords: "Metakey, NFTs, Web3, NFT Game, NFT Gaming, Web3 Gaming, Arcade",
  url: "https://www.arcade.themetakey.io"
}


const Darts: NextPage = () => {


  const { unityProvider, isLoaded, loadingProgression, initialisationError } = useUnityContext({
    loaderUrl: "/games/Darts/Build/Web_Darts_Test.loader.js",
    dataUrl: "/games/Darts/Build/Web_Darts_Test.data",
    frameworkUrl: "/games/Darts/Build/Web_Darts_Test.framework.js",
    codeUrl: "/games/Darts/Build/Web_Darts_Test.wasm",
  });



  console.log(isLoaded, loadingProgression, initialisationError)

  return (
    <div className=" overflow-y-hidden flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>{head.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta itemProp="name" content="" />
        <meta itemProp="description" content={head.description} />
        <meta itemProp="image" content={head.image} />

        <meta property="og:url" content={head.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={head.title} />
        <meta property="og:description" content={head.description} />
        <meta property="og:image" content={head.image} />

        <meta name="twitter:card" content={head.image} />
        <meta name="twitter:title" content={head.title} />
        <meta name="twitter:description" content={head.description} />
        <meta name="twitter:image" content={head.image} />

        <meta
          name="keywords"
          content={head.keywords}
        />
      </Head>
      <Game unityProvider={unityProvider} />
    </div>
  )
}

export default Darts
