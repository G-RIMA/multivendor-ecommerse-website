import BrandSlider from '../components/brand-slider.component';

const TopBrands: React.FC = () => {
  const slides = [
    {
      maintitle: "Top Brands",
      title: "Wear your skin",
      subtitle: "with pride",
      discount: "Up to 25% off",
      brandLogo: "/nivea-logo.png",
      productImage: "/nivea-products.png",
      backgroundColor: "bg-blue-600",
    },
    // Add more slides as needed
  ];

  return (
    <div>
      <BrandSlider slides={slides} />
      {/* Rest of your page content */}
    </div>
  );
};

export default TopBrands;