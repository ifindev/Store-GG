import CheckoutItem from '../../molecules/CheckoutItem/CheckoutItem'
import CheckoutDetail from '../../molecules/CheckoutDetail/CheckoutDetail'
import CheckoutConfirmation
  from '../../molecules/CheckoutConfirmation/CheckoutConfirmation'

const CheckoutBody = () => {
  return (
    <>
      <CheckoutItem
        src="/img/Thumbnail-3.png"
        title="Mobile Legends:"
        description="The New Battle 2021"
        category="Mobile"
      />
      <hr />
      <CheckoutDetail/>
      <CheckoutConfirmation/>
    </>
  )
}

export default CheckoutBody
