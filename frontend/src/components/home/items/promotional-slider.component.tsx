import ReusableSlider from "../components/slider.component";
import { Slide } from "../components/slider.component";


const PromotionalSlider: React.FC = () => {
  const promotions: Slide[] = [
    { id: 1, image: '/promo1.jpg', alt: 'Summer Sale', link: '/promotions/summer-sale' },
    { id: 2, image: '/promo2.jpg', alt: 'New Arrivals', link: '/promotions/new-arrivals' },
    { id: 3, image: '/promo3.jpg', alt: 'Clearance', link: '/promotions/clearance' },
    { id: 4, image: '/promo4.jpg', alt: 'Holiday Deals', link: '/promotions/holiday-deals' },
    { id: 5, image: '/promo5.jpg', alt: 'Flash Sale', link: '/promotions/flash-sale' },
  ];

  return <ReusableSlider slides={promotions} />;
};

export default PromotionalSlider;