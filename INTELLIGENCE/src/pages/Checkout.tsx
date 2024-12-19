import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    // Simulate payment process
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      navigate('/receipt', { 
        state: { 
          items: state.items,
          total: state.total,
          transactionId: Math.random().toString(36).substr(2, 9),
          date: new Date().toISOString()
        }
      });
    }, 1500);
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4 p-4 border rounded">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full" onClick={handleCheckout}>
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;