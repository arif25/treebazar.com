import FAQItem from './FAQItem';

const faqs = [
  { question: '1. What does Treebazar sell?', 
    answer: 'Treebazar offers a wide range of live plants including indoor plants, succulents, cactus, lucky bamboo, ornamental plants, and selected gardening items. All plants are checked before dispatch to ensure good health and quality.' 
  },
  { question: '2. Are your plants real and live?', 
    answer: 'We do not share user data with third parties We do not share user data with third parties We do not share user data with third partiesYes. All our plants are 100% live and naturally grown. We do not sell artificial plants.' 
  },
  { question: '3. How are plants packed for delivery?', 
    answer: 'Plants are packed using secure, plant-safe packaging methods. We protect the roots and stems carefully so they remain safe and fresh during transit.' 
  },
  { question: '4. Do plants get damaged during shipping?', 
    answer: 'Minor soil disturbance or slight leaf stress can happen during transit, which is normal. Most plants recover quickly after watering and proper care. We always try to minimize risk with strong packaging.' 
  },
  { question: '5. How long does delivery take?', 
    answer: 'Delivery time usually depends on your location. Most orders are delivered within 3–7 business days after dispatch.' 
  },
  { question: '6. Do you ship to all locations?', 
    answer: 'We ship to most serviceable pin codes. If your area is not serviceable, the order may be canceled and refunded.' 
  },
  { question: '7. How should I care for my plant after delivery?', 
    answer: 'After receiving your plant:',
    points: 'Unpack it carefully, Give it fresh air and indirect light, Water lightly if soil is dry, Avoid direct harsh sunlight for the first 1–2 days' 
  },
  { question: '8. Will the plant look exactly like the photo?', 
    answer: 'Plants are natural living items, so size, color, and shape may vary slightly from the photos. We always send the closest healthy match available.' 
  },
  { question: '9. Do you provide pots with the plants?', 
    answer: 'Some plants come with pots and some come in nursery grow bags. Product pages clearly mention what is included.' 
  },
  { question: '10. Can I return or replace a plant?', 
    answer: 'If your plant arrives severely damaged or dead, contact us within 24 hours with clear photos and your order details. We will review and offer a replacement or refund if applicable.' 
  },

  
  { question: '11. Can I cancel my order?', 
    answer: 'Orders can be canceled only before they are shipped. Once dispatched, cancellation may not be possible.' 
  },
  { question: '12. Do you offer bulk orders?', 
    answer: 'Yes, we accept bulk and business orders. Please contact us with your requirements for special pricing and availability.' 
  },
  { question: '13. How can I contact Treebazar?', 
    answer: 'You can contact us through:',
    points: 'Contact form on the website, Email support, WhatsApp / phone (if listed on site)'
  },
  { question: '14. Do you add new plants regularly?', 
    answer: 'Yes. We frequently add new plant varieties and seasonal items. Check back often for updates.'  
  },
];

const FAQSection: React.FC = () => { 
  return (
    <section className="flex flex-col gap-16 md:flex-row justify-between px-6 md:px-20 py-12 bg-white">
      {/* Left Illustration */}
      <div className="w-full md:w-1/3 mb-10 md:mb-0">
        <img src="images/product-item.jpg" alt="FAQ Illustration" className="max-w-full w-full h-auto" />
      </div>

      {/* Right FAQ List */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">FAQ – Treebazar</h2>
        <p className="text-gray-600 mb-8">Questions you might ask about product and services</p>
        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
