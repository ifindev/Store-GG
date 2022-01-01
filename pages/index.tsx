/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import AOS from 'aos'
import {
  FeaturedGames,
  Footer,
  MainBanner,
  Navbar,
  Reached,
  Story,
  TransactionStep,
} from '../components'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGames />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}
