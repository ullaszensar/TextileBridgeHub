import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <>
      {/* About Hero */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-roboto font-bold mb-4">About TexBridge</h1>
            <p className="max-w-3xl mx-auto text-lg">Learn about our journey, mission and commitment to the textile industry.</p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-roboto font-bold text-primary mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4">Founded in 2005, TexBridge began as a small supplier of textile machine parts in the heart of India's textile manufacturing region. Over the years, we have grown to become a trusted wholesale dealer of complete textile machinery and spare parts.</p>
              <p className="text-neutral-700 mb-4">With a focus on quality, reliability, and exceptional customer service, we have built lasting relationships with manufacturers and clients across the country.</p>
              <p className="text-neutral-700">Today, TexBridge is recognized as a leading provider of textile machinery solutions, offering comprehensive support from initial purchase through installation and ongoing maintenance.</p>
            </div>
            {/* A modern textile factory floor with various machinery */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="TexBridge Company History" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-roboto font-bold text-primary mb-4">Our Mission & Values</h2>
            <p className="max-w-3xl mx-auto text-neutral-600">Guiding principles that define who we are and how we operate.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <Card className="p-8">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-roboto font-bold mb-3">Quality</h3>
              <p className="text-neutral-600">We are committed to providing only the highest quality machinery and parts that meet international standards and specifications.</p>
            </Card>
            
            {/* Value 2 */}
            <Card className="p-8">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-roboto font-bold mb-3">Integrity</h3>
              <p className="text-neutral-600">We conduct business with honesty, transparency, and fairness, building trust with our customers and partners.</p>
            </Card>
            
            {/* Value 3 */}
            <Card className="p-8">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <h3 className="text-xl font-roboto font-bold mb-3">Innovation</h3>
              <p className="text-neutral-600">We continuously seek advanced solutions and technologies to help our clients improve their manufacturing processes.</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-roboto font-bold text-primary mb-4">Our Leadership Team</h2>
            <p className="max-w-3xl mx-auto text-neutral-600">Meet the experienced professionals guiding TexBridge.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-roboto font-bold text-primary">Amit Patel</h3>
                <p className="text-secondary font-medium mb-3">Founder & CEO</p>
                <p className="text-neutral-600 mb-4">With over 25 years of experience in the textile industry, Amit leads our company vision and strategy.</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-roboto font-bold text-primary">Priya Singh</h3>
                <p className="text-secondary font-medium mb-3">Technical Director</p>
                <p className="text-neutral-600 mb-4">Priya oversees our technical operations, ensuring we provide the best solutions for our clients.</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-roboto font-bold text-primary">Rahul Sharma</h3>
                <p className="text-secondary font-medium mb-3">Sales Manager</p>
                <p className="text-neutral-600 mb-4">Rahul leads our sales team, focusing on building strong client relationships and understanding their needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
