import BannerDeals, { ProductDeal } from "../components/banner.component";

const TopDealSection: React.FC = () => {
    const banner = {
      title: "Top Deals On Phones",
      subtitle: "up to 40% off",
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

export default TopDealSection;