import React from 'react'

interface ReachedItemProps {
  stats: string
  desc: string
  isLast?: boolean
}

const ReachedItem = ({ stats, desc, isLast }: ReachedItemProps) => {
  return (
    <>
      <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {stats}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">
          {desc}
        </p>
      </div>
      {!isLast && (
        <>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
        </>
      )}
    </>
  )
}

ReachedItem.defaultProps = {
  isLast: false,
}

export default ReachedItem
