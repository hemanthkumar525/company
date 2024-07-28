import TopNavigation from '../topnav';
import Sidebar from '../sidebar';
import ProductCard from './cntnt';
import babyboss from '../photo/babyboss.jpeg';
import bottle from '../photo/bottle.jpeg';
import jerry from '../photo/jerry.jpeg';
import micky from '../photo/micky.jpeg';
import mini from '../photo/mini.jpeg';
import shark from '../photo/shark.jpg';
import pocoman from '../photo/pocoman.jpg';
import joker from '../photo/joker.jpg';

// import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Baby boss Costume',
    price: '15000-18000',
    image: babyboss,
  },
  {
    id: 2,
    name: 'Bottle inflated costume',
    price: '15000-18000',
    image: bottle,
  },
  {
    id: 3,
    name: "Jerry Costume",
    price:"15000-18000",
    image: jerry,
  },
  {
    id: 4,
    name: 'Micky Mouse Cstume',
    price:"15000-18000",
    image: micky,
  },
  {
    id: 5,
    name: 'Minne Mouse Costume',
    price:'15000-18000',
    image: mini,
  },
  {
    id: 6,
    name: 'Shark Costume',
    price:'15000-18000',
    image: shark,
  },
  {
    id: 7,
    name: 'Pogoman Costume',
    price:'15000-18000',
    image: pocoman,
  },
  {
    id: 8,
    name: 'Joker Costume',
    price:'15000-18000',
    image: joker,
  },
  // Add more products as needed
];

const Ginne = () => {
  return (
    <div className='content-container top-0 fixed h-screen w-15 flex flex-col bg-white dark:bg-gray-900 shadow-lg'>
      <Sidebar/>
      <TopNavigation />
      <div className="container mx-auto p-4 h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full overflow-y-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>

    </div>
  );
};



export default Ginne;