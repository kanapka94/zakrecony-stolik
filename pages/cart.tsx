import { useCart } from '../components/Cart/CartContext';

const CartContent = () => {
  const cartState = useCart();

  return (
    <div className="col-span-2">
      <ul className="divide-y divide-gray-200">
        {cartState.items.map((item, index) => (
          <li key={`${item.title}_${index}`} className="py-4 flex justify-between">
            <span>
              {item.count} x {item.title}
            </span>
            <div className="flex">
              <span className="ml-2">{item.price}</span>
              <button
                onClick={() => cartState.removeItemFromCart(item.id)}
                className="ml-4 text-red-500 flex"
                aria-label="Usuń element"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CartSummary = () => {
  const cartState = useCart();

  return (
    <div>
      Podsumowanie koszyka
      <p className="font-bold">Liczba elementów: {cartState.items.length}</p>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <div className="grid grid-cols-3 gap-8">
        <CartContent />
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
