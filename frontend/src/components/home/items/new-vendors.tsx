import BannerDeals, { ProductDeal } from "../components/banner.component";

const NewVendors: React.FC = () => {
    const banner = {
      title: "New Vendors",
      seeAllLink: "/phone-deals",
    };
  
    const deals: ProductDeal[] = [
      {
        id: '1',
        name: 'Samsung Galaxy A15',
        image: '/path/to/samsung-a15.jpg',
        currentPrice: 15940,
        originalPrice: 16500,
        discountPercentage: 3,
        specs: '6.5", 128GB + 4GB RAM',
      },
      // ... add other phone deals
    ];
  
    return <BannerDeals banner={banner} deals={deals} />;
  };

export default NewVendors;