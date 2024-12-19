import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import { useQuery } from '@tanstack/react-query';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Index = () => {
  const { dispatch } = useCart();
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const handleAddToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    });
    toast({
      title: "Added to Cart",
      description: "Item has been added to your cart.",
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  // Group products by category
  const groupedProducts = products.reduce((acc: any, product: any) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      <main className="container mx-auto px-4 py-8">
        {Object.entries(groupedProducts).map(([category, categoryProducts]: [string, any]) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 capitalize">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product: any) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-contain mb-4"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 truncate">{product.title}</h3>
                  <p className="text-lg font-bold mb-4">${product.price}</p>
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Index;