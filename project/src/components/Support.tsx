import React from 'react';
import { HelpCircle, Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

export function Support() {
  const supportItems = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Our team is available round the clock to assist you with any queries."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant support through our live chat service during business hours."
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "FAQ",
      description: "Find answers to commonly asked questions about our properties and services."
    }
  ];

  return (
    <section className="py-12 bg-white" id="support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
          <p className="text-lg text-gray-600">We're here to assist you every step of the way</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}