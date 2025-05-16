import { useState } from 'react';
import { Link } from 'wouter';

const productCategories = [
  { id: 'all', name: 'All Categories' },
  { id: 'spinning', name: 'Spinning Machinery' },
  { id: 'weaving', name: 'Weaving Machines' },
  { id: 'knitting', name: 'Knitting Equipment' },
  { id: 'processing', name: 'Processing Machinery' },
  { id: 'spare', name: 'Spare Parts' }
];

const productsList = [
  {
    id: 1,
    name: 'Automatic Spinning Machine',
    description: 'High-efficiency spinning machine with advanced automation features.',
    image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'spinning'
  },
  {
    id: 2,
    name: 'High-Speed Rapier Loom',
    description: 'Versatile weaving machine for various fabric types with precision control.',
    image: 'https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'weaving'
  },
  {
    id: 3,
    name: 'Circular Knitting Machine',
    description: 'High-production circular knitting system for jersey and interlock fabrics.',
    image: 'https://images.unsplash.com/photo-1617785899222-fe06b15b6dd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'knitting'
  },
  {
    id: 4,
    name: 'Fabric Dyeing Machine',
    description: 'Energy-efficient dyeing system with precise temperature control.',
    image: 'https://pixabay.com/get/g66892d5f646f8b6289be405281a2051f313f5ba5ecfa3296f63969a5c4494a81242e6ea7e6127a6e7fc9ace6d889f0adcf8c0cfae070124a013db2e014a2ddb9_1280.jpg',
    category: 'processing'
  },
  {
    id: 5,
    name: 'Spinning Machine Parts',
    description: 'Genuine replacement parts for all major spinning machine brands.',
    image: 'https://pixabay.com/get/gb96ca943db0ff2dd38348f5d20318ed60a9d9bb5d794e3fbdfd3ecd1debbca94290cb7c9ef73168d89dfde5785d1dd40422686c49f92e1e8548d6cf6bdf79de7_1280.jpg',
    category: 'spare'
  },
  {
    id: 6,
    name: 'Weaving Machine Components',
    description: 'Essential components and spare parts for weaving machinery.',
    image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'spare'
  },
  {
    id: 7,
    name: 'Motors and Drives',
    description: 'High-efficiency motors and electronic drives for textile machinery.',
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'spare'
  },
  {
    id: 8,
    name: 'Control Systems',
    description: 'Advanced electronic control systems for textile machinery automation.',
    image: 'https://pixabay.com/get/g858411d79944d2e20b87f32ec80307d9e798019ad5e120261d302f29f37eba1a292993dced5f7f572bb76d05dcae6d775f98b856c6eb4b26172d0965c8aa7940_1280.jpg',
    category: 'processing'
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? productsList 
    : productsList.filter(product => product.category === activeCategory);

  return (
    <>
      {/* Products Hero */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-roboto font-bold mb-4">Our Products</h1>
            <p className="max-w-3xl mx-auto text-lg">Comprehensive range of textile machinery and spare parts.</p>
          </div>
        </div>
      </div>

      {/* Products Category Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 scrollbar-none">
            {productCategories.map((category) => (
              <button 
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-5 py-2 mr-4 rounded-md transition-300 ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-neutral-100 hover:bg-neutral-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-300">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-roboto font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{product.description}</p>
                  <Link href="/contact">
                    <a className="text-secondary font-medium hover:underline">
                      Request Quote 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-l-md hover:bg-opacity-90">1</a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-100">2</a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white rounded-r-md hover:bg-neutral-100">3</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Product Request */}
      <div className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-roboto font-bold text-primary mb-4">Can't Find What You Need?</h2>
              <p className="max-w-3xl mx-auto text-neutral-600">We can source specific machinery and parts based on your requirements.</p>
            </div>
            
            <div className="flex justify-center">
              <Link href="/contact">
                <a className="bg-secondary hover:bg-opacity-80 text-white font-medium py-3 px-8 rounded-md transition-300 inline-flex items-center">
                  <span>Request Custom Quote</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
