import DealsSlider from "../components/deals.component";
import { Deal } from "../components/deals.component";

const DealsSection: React.FC = () => {
    const banner = {
        title: "Jumia Festival | Top Deals On Phones",
        subtitle: "up to 40% off",
        seeAllLink: "/phone-deals",
    };

    const deals: Deal[] = [
      {
        id: '1',
        title: 'Smart TVs',
        priceFrom: '12K',
        image: '/path/to/smart-tv-image.jpg',
      },
      {
        id: '2',
        title: 'Everything Skin',
        priceFrom: '500 Bob',
        image: '/path/to/skin-products-image.jpg',
      },
      // ... add other deals
      {
        id: '7',
        title: 'TECNO',
        category: 'POP 8, 6.6", 3GB, 64GB',
        price: 10199,
        originalPrice: 12499,
        image: '/path/to/tecno-phone-image.jpg',
      },
      // ... add other specific product deals
    ];
  
    return <DealsSlider deals={deals} />;
  };

  export default DealsSection;