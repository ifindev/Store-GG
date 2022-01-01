import React from 'react'
import ReachedItem from '../../molecules/ReachedItem/ReachedItem'
import { reachedItems } from '../../../constants/constants'

const Reached = () => {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          {reachedItems.map((item, index) => {
            return (
              <ReachedItem
                stats={item.stats}
                desc={item.desc}
                isLast={index === reachedItems.length - 1}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Reached
