import { Link } from 'wouter';
import { Card } from '@/components/ui/card';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div 
          className="h-[500px] bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')", 
            backgroundBlendMode: "overlay", 
            backgroundColor: "rgba(15, 76, 129, 0.7)" 
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-roboto font-bold mb-4">Textile Machinery & Spare Wholesale Dealer</h1>
              <p className="text-lg md:text-xl mb-8">Quality machinery and spares for the modern textile industry. Reliable solutions for all your production needs.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <a className="bg-secondary hover:bg-opacity-80 text-white font-medium py-3 px-6 rounded-md transition-300">View Products</a>
                </Link>
                <Link href="/contact">
                  <a className="bg-white hover:bg-neutral-100 text-primary font-medium py-3 px-6 rounded-md transition-300">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-roboto font-bold text-primary mb-4">Why Choose TexBridge</h2>
            <p className="max-w-3xl mx-auto text-neutral-600">We provide high-quality textile machinery and spare parts with exceptional service and technical support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-roboto font-bold mb-3">Quality Products</h3>
              <p className="text-neutral-600">Premium machinery and spare parts sourced from industry-leading manufacturers.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-roboto font-bold mb-3">Expert Support</h3>
              <p className="text-neutral-600">Technical assistance from experienced professionals who understand your needs.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-roboto font-bold mb-3">Fast Delivery</h3>
              <p className="text-neutral-600">Efficient logistics and inventory management for quick order fulfillment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Products Preview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-roboto font-bold text-primary">Featured Products</h2>
            <Link href="/products">
              <a className="text-secondary font-medium hover:underline">
                View All 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="product-card group relative overflow-hidden rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Spinning Machine" className="w-full h-64 object-cover" />
              <div className="product-details absolute inset-0 bg-primary bg-opacity-80 flex flex-col justify-end p-6">
                <h3 className="text-xl font-roboto font-bold text-white">Spinning Machines</h3>
                <p className="text-white text-sm mb-4">Advanced spinning solutions for modern textile production needs.</p>
                <Link href="/products">
                  <a className="text-white bg-secondary hover:bg-opacity-80 py-2 px-4 rounded inline-block text-sm transition-300">Learn More</a>
                </Link>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-roboto font-bold text-primary">Spinning Machines</h3>
                <p className="text-neutral-600 mt-2">High-performance machinery for efficient production</p>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="product-card group relative overflow-hidden rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Weaving Looms" className="w-full h-64 object-cover" />
              <div className="product-details absolute inset-0 bg-primary bg-opacity-80 flex flex-col justify-end p-6">
                <h3 className="text-xl font-roboto font-bold text-white">Weaving Looms</h3>
                <p className="text-white text-sm mb-4">Precise and reliable looms for textile manufacturing.</p>
                <Link href="/products">
                  <a className="text-white bg-secondary hover:bg-opacity-80 py-2 px-4 rounded inline-block text-sm transition-300">Learn More</a>
                </Link>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-roboto font-bold text-primary">Weaving Looms</h3>
                <p className="text-neutral-600 mt-2">Precision engineering for quality fabric production</p>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="product-card group relative overflow-hidden rounded-lg shadow-md">
              <img src="https://pixabay.com/get/gcd0a29ce8c6133cc3e061d0197f77d6259425481a4ffb6761127f10f92c624221c0160c276cf2b93b4b5ea459f25f3e8a403fff429012f5ce30839d03ab0b2ab_1280.jpg" alt="Machinery Parts" className="w-full h-64 object-cover" />
              <div className="product-details absolute inset-0 bg-primary bg-opacity-80 flex flex-col justify-end p-6">
                <h3 className="text-xl font-roboto font-bold text-white">Spare Parts</h3>
                <p className="text-white text-sm mb-4">Genuine spare parts for all major textile machinery brands.</p>
                <Link href="/products">
                  <a className="text-white bg-secondary hover:bg-opacity-80 py-2 px-4 rounded inline-block text-sm transition-300">Learn More</a>
                </Link>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-roboto font-bold text-primary">Spare Parts</h3>
                <p className="text-neutral-600 mt-2">Genuine components for all major brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-roboto font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="max-w-3xl mx-auto text-neutral-600">Trusted by textile manufacturers across the country.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="text-secondary">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-neutral-700 italic mb-6">
                "TexBridge has been our trusted supplier for over 5 years. Their machinery is reliable, and their technical support is outstanding. Whenever we need spare parts, they deliver quickly, minimizing our downtime."
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-roboto font-bold">Rajesh Sharma</p>
                  <p className="text-neutral-500 text-sm">Production Manager, Textile Mills Ltd</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Partner Brands */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-roboto font-bold text-primary mb-4">Our Partners</h2>
            <p className="max-w-3xl mx-auto text-neutral-600">We collaborate with leading brands in the textile machinery industry.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Partner logos would be here - using placeholders */}
            {[1, 2, 3, 4].map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-24 bg-neutral-100 rounded-md p-4">
                <div className="text-neutral-500 font-roboto font-bold text-lg">Brand Partner {partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
