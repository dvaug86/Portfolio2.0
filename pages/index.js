import Head from 'next/head'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

export default function Home() {
  return (
    <nav>
      <Head>
        <title>DV | PORTFOLIO </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Skills />
    </nav>
  )
}
