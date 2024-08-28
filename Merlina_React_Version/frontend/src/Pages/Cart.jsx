import CartEntry from './CartEntry'
// import './Cart.css'
import individual_sandals from '../Components/Assets/individual_sandals'

function Cart() {

  return (
    <aside>
      Mi carro:
      <div>
        {individual_sandals.filter(p => p.new_price < 20).map(individual_sandals =>
          <CartEntry key={individual_sandals.id} individual_sandals={individual_sandals} />
        )}
      </div>
    </aside>
  )
}

export default Cart
