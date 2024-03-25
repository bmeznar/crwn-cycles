import { Outlet } from 'react-router-dom';

import CategoryList from '../../components/category-list/category-list.component';

const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "Road bikes",
      "imageUrl": "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dw3fcc99a7/images/plp/road-bikes/Ridestyle-canyon-race-my23-05.jpg?sw=632&sh=474&sm=cut"
    },
    {
      "id": 2,
      "title": "Bike components",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0278/9874/0835/files/Groupset_flat_lay.jpg?v=1620901742"
    },
    {
      "id": 3,
      "title": "Bike accessories",
      "imageUrl": "https://cdn.mos.cms.futurecdn.net/3xHDjTdWBBPHxKVfFopSVA-1200-80.jpg"
    },
    {
      "id": 4,
      "title": "Bike clothing",
      "imageUrl": "https://bike-addict.co.za/cdn/shop/collections/assos-s9-shorts3_1400x.png?v=1623491051"
    },
    {
      "id": 5,
      "title": "Sports food",
      "imageUrl": "https://www.otesports.co.uk/wp-content/uploads/2022/01/Gels.jpg"
    }
  ]

  return (
    <div>
      <CategoryList categories={categories} />
      <Outlet />
    </div>
  );
}

export default Home;
