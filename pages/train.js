import Head from 'next/head'
import Exo from '../components/template/train';


export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>dubani train</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Exo/>
        
      </main>

    </div>
  )
}
