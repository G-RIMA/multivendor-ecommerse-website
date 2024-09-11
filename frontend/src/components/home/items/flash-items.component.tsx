import FlashSales from "../components/flash-sale.component";
import { Product } from "../components/flash-sale.component";

const FlashSalesSection: React.FC = () => {
    const products: Product[] = [
      {
        id: '1',
        name: 'Fashion Wide Band Satin...',
        image: '/path/to/image1.jpg',
        discount: 49,
        currentPrice: 295,
        originalPrice: 578,
        itemsLeft: 107,
      },
      // ... add other products
    ];
  
    return <FlashSales timeLeft="12h : 15m : 11s" products={products} />;
  };

  export default FlashSalesSection;