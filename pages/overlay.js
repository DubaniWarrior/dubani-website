import Head from 'next/head'
import Exo from '../components/template/scrollMagic';


export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>dubani agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Exo/>
        
      </main>

    </div>
  )
}
