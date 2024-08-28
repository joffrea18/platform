import PropTypes from 'prop-types'

function CartEntry({ individual_sandals }) {
  return (
    <div key={individual_sandals.id} className="cart-entry">
      <img src={individual_sandals.image} />
      <span>
        {individual_sandals.title}
      </span>
    </div>
  )
}

CartEntry.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string
  })
}

export default CartEntry
