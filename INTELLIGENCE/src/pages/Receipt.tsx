import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, total, transactionId, date } = location.state || {};

  const handlePrint = () => {
    window.print();
  };

  if (!items) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Receipt Not Found</h1>
        <Button onClick={() => navigate('/')}>Return to Home</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Thank You for Your Purchase!</h1>
          <p className="text-gray-600">Transaction ID: {transactionId}</p>
          <p className="text-gray-600">Date: {new Date(date).toLocaleString()}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          {items.map((item: any) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.title} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button onClick={handlePrint}>Print Receipt</Button>
          <Button variant="outline" onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;