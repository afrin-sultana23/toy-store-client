import { useState, useEffect } from 'react';
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from './ShopCard';

const App = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/toys")
    .then((res) => res.json())
    .then((data) => setProducts(data));
  }, []);



  const groupedProducts = products.reduce((acc, product) => {
    const category = product.subCategory;
    acc[category] = acc[category] || [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className='mx-auto max-w-6xl my-20'>
      <h1 className='my-4 text-center text-3xl font-semibold text-[#28282B] tracking-widest'>Shop By Category</h1>
      <ReactTabs>
        <TabList>
          {Object.keys(groupedProducts).map((subCategory, index) => (
            <Tab key={index}>
                <p className='text-lg tracking-widest'>{subCategory}</p>
            </Tab>
          ))}
        </TabList>

        {Object.entries(groupedProducts).map(([ subCategory, categoryProducts], index) => (
          <TabPanel key={index}>
            <div  className='mx-auto max-w-5xl grid grid-cols-3 gap-4'>
            
          {categoryProducts.map(toy => (
              <ShopCard 
               key={toy._id}
               toy={toy} 
               />
              
            ))
          }
        </div>
          </TabPanel>
        ))}
      </ReactTabs>
    </div>
  );
};

export default App;

