import FAQItem from './FAQItem';

const faqs = [
  { question: 'Are there any subscription fees?', 
    answer: 'We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and emailNo, there are no subscription fees. No, there are no subscription fees No, there are no subscription fees' 
  },
  { question: 'Do you share user data with third parties?', 
    answer: 'We do not share user data with third parties We do not share user data with third parties We do not share user data with third parties' 
  },
  { question: 'Is there a free trial available?', 
    answer: 'We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and emailYes, we offer a 14-day free trial Yes, we offer a 14-day free trial Yes, we offer a 14-day free trial Yes, we offer a 14-day free trial' 
  },
  { question: 'What kind of customer support do you provide?', 
    answer: 'We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and emailWe provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email We provide 24/7 customer support via chat and email' 
  },
  { question: 'What payment methods do you accept?', 
    answer: 'We accept all major credit cards and PayPal We accept all major credit cards and PayPal We accept all major credit cards and PayPal We accept all major credit cards and PayPal We accept all major credit cards and PayPal We accept all major credit cards and PayPal We accept all major credit cards and PayPal We accept all major credit cards and PayPal We accept all major credit cards and PayPal We accept all major credit cards and PayPal' 
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      {/* Left Illustration */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <img src="images/product-item.jpg" alt="FAQ Illustration" className="max-w-full w-full h-auto" />
      </div>

      {/* Right FAQ List */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently asked questions</h2>
        <p className="text-gray-600 mb-8">Questions you might ask about product and services</p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
