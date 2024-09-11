import CategoryShowcase, { Category } from "../components/categories-deals.component";

const Categories: React.FC = () => {
    const applianceCategories: Category[] = [
      {
        id: '1',
        name: 'Cookers',
        image: '/path/to/cookers-image.jpg',
        link: '/appliances/cookers',
      },
      {
        id: '2',
        name: 'Fridges',
        image: '/path/to/fridges-image.jpg',
        link: '/appliances/fridges',
      },
      {
        id: '3',
        name: 'Blenders',
        image: '/path/to/blenders-image.jpg',
        link: '/appliances/blenders',
      },
      {
        id: '4',
        name: 'Washers & Dryers',
        image: '/path/to/washers-dryers-image.jpg',
        link: '/appliances/washers-dryers',
      },
      {
        id: '5',
        name: 'Dispensers',
        image: '/path/to/dispensers-image.jpg',
        link: '/appliances/dispensers',
      },
      {
        id: '6',
        name: 'Cooktops',
        image: '/path/to/cooktops-image.jpg',
        link: '/appliances/cooktops',
      },
    ];
  
    return (
      <CategoryShowcase
        title="Jumia Festival | Appliances Categories"
        categories={applianceCategories}
      />
    );
  };
export default Categories;