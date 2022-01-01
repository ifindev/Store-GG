import React from 'react'
import GameItem from '../../molecules/GameItem/GameItem'
import { gameItems } from '../../../constants/constants'

const FeaturedGames = () => {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameItems.map((item) => {
            return (
              <GameItem
                title={item.title}
                category={item.category}
                thumbnail={item.thumbnail}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGames
