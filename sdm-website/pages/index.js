import Head from 'next/head'
import NavigationBar from './NavigationBar.js'
import Content from './Content.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sonrisas del Mañana</title>
        <meta name="description" content="Sonrisas del Mañana: Un camino hacia el futuro." />
        <link rel="icon" href="/sdm.ico" />
      </Head>

      <main>
        <NavigationBar />
        <Content />
      </main>

      <footer>
      </footer>
    </div>
  )
}