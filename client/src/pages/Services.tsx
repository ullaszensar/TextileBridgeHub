import { Card } from '@/components/ui/card';

const Services = () => {
  return (
    <>
      {/* Services Hero */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-roboto font-bold mb-4">Our Services</h1>
            <p className="max-w-3xl mx-auto text-lg">Comprehensive solutions for textile machinery needs.</p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            {/* Service 1 Content */}
            <div>
              <h2 className="text-3xl font-roboto font-bold text-primary mb-6">Machinery Distribution</h2>
              <p className="text-neutral-700 mb-4">We provide a wide range of textile machinery from leading manufacturers worldwide. Our comprehensive catalog includes:</p>
              <ul className="list-disc pl-5 text-neutral-700 mb-6 space-y-2">
                <li>Spinning equipment</li>
                <li>Weaving machines</li>
                <li>Knitting machines</li>
                <li>Dyeing and finishing equipment</li>
                <li>Quality control devices</li>
              </ul>
              <p className="text-neutral-700">We work closely with you to understand your specific requirements and recommend the most suitable machinery for your production needs.</p>
            </div>
            {/* Service 1 Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Textile Machinery Distribution Services" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            {/* Service 2 Image */}
            <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Spare Parts Supply Services" 
                className="w-full h-auto"
              />
            </div>
            {/* Service 2 Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-roboto font-bold text-primary mb-6">Spare Parts Supply</h2>
              <p className="text-neutral-700 mb-4">We maintain an extensive inventory of genuine spare parts for all major textile machinery brands. Our spare parts services include:</p>
              <ul className="list-disc pl-5 text-neutral-700 mb-6 space-y-2">
                <li>Original manufacturer parts</li>
                <li>Compatible replacement components</li>
                <li>Fast order processing and delivery</li>
                <li>Bulk ordering options</li>
                <li>Hard-to-find parts sourcing</li>
              </ul>
              <p className="text-neutral-700">Our efficient inventory management system ensures quick delivery to minimize your production downtime.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Service 3 Content */}
            <div>
              <h2 className="text-3xl font-roboto font-bold text-primary mb-6">Technical Support</h2>
              <p className="text-neutral-700 mb-4">Our technical experts provide comprehensive support for all the machinery and parts we supply. Our technical services include:</p>
              <ul className="list-disc pl-5 text-neutral-700 mb-6 space-y-2">
                <li>Installation assistance</li>
                <li>Operational training</li>
                <li>Troubleshooting guidance</li>
                <li>Maintenance recommendations</li>
                <li>Technical documentation</li>
              </ul>
              <p className="text-neutral-700">We're committed to ensuring your equipment operates at optimal efficiency throughout its lifecycle.</p>
            </div>
            {/* Service 3 Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Technical Support Services" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-roboto font-bold text-primary mb-4">Additional Services</h2>
            <p className="max-w-3xl mx-auto text-neutral-600">Complementary offerings to support your textile operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Additional Service 1 */}
            <Card className="p-8">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-roboto font-bold mb-3">Machinery Upgrades</h3>
              <p className="text-neutral-600">We offer upgrade kits and retrofit solutions to enhance the performance and extend the lifespan of your existing machinery.</p>
            </Card>
            
            {/* Additional Service 2 */}
            <Card className="p-8">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-roboto font-bold mb-3">Equipment Inspection</h3>
              <p className="text-neutral-600">Our technicians can conduct thorough inspections of your machinery to identify potential issues before they lead to costly breakdowns.</p>
            </Card>
            
            {/* Additional Service 3 */}
            <Card className="p-8">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-roboto font-bold mb-3">Machinery Exchange</h3>
              <p className="text-neutral-600">We facilitate the buying and selling of used textile machinery, helping you optimize your equipment investments.</p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
