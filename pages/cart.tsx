import { CartContent } from '../components/Cart/CartContent';
import { CartSummary } from '../components/Cart/CartSummary';

const CartPage = () => (
  <div className="max-w-7xl mx-auto w-full p-4">
    <div className="grid grid-cols-3 gap-8">
      <CartContent />
      <CartSummary />
    </div>
  </div>
);

export default CartPage;
