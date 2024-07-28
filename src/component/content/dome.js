import TopNavigation from '../topnav';
import Sidebar from '../sidebar';
import ProductCard from './cntnt';
import front from "../photo/fr_bI.jpg";
import side1 from '../photo/side_bi.jpg';
import side2 from '../photo/side2_bi.jpg';
import back from '../photo/back_bi.jpg';
// import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Inflatable Black 16_ft',
    description: 'The Bubble House is a inflated tranparent inflatable',
    image: front,
  },
  {
    id: 2,
    name: 'Inflatable Black  18_ft',
    description: 'The Bubble House is a inflated tranparent inflatable',
    image: side1,
  },
  {
    id: 3,
    name: 'Inflatable Black  20_ft',
    description: 'The Bubble House is a inflated tranparent inflatable',
    image: side2,
  },
  {
    id: 4,
    name: 'Inflatable Black  22_ft',
    description: 'The Bubble House is a inflated tranparent inflatable',
    image: back,
  },
  // Add more products as needed
];

const ContentContainer = () => {
  return (
    <div className='content-container top-0  fixed h-screen w-15 flex flex-col bg-white dark:bg-gray-900 shadow-lg'>
      <Sidebar/>
      <TopNavigation />+
      <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
    </div>
  );
};






export default ContentContainer;