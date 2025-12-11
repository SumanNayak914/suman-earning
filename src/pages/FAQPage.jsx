import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "What is this platform about?", a: "This platform provides daily auto-updated Amazon & Flipkart deals with rewards, bonus coins, referral earnings, and smart product suggestions. Users can unlock offers, view deals, and earn coins by staying active." },

    { q: "How do I earn coins?", a: "You can earn coins by browsing products, unlocking daily timers, inviting friends, completing simple tasks, and staying active for bonus rewards." },

    { q: "Are the deals updated automatically?", a: "Yes. Deals are fetched automatically using AI-assisted product sourcing to ensure you get the latest trending, high-conversion products daily." },

    { q: "How does the referral program work?", a: "Invite others using your unique referral link. When they join and stay active, you earn referral coins + bonus rewards." },

    { q: "Is this platform free?", a: "Yes. Browsing deals, earning coins, and using all features is completely free." },

    { q: "Can I redeem coins for rewards?", a: "Yes. Coins can be redeemed for perks, discount coupons, wallet boosts, and upcoming gift card rewards." },

    { q: "Are Amazon & Flipkart links safe?", a: "Absolutely. All product links are official affiliate links that redirect ONLY to Amazon or Flipkart’s secure website." },

    { q: "Does this platform store my personal data?", a: "No sensitive data is stored. Only minimal information like points, referral stats, and activity logs is saved." },

    { q: "Will new features be added?", a: "Yes. Personalized recommendations, gift card rewards, spin-to-win, and many more features are on the way." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-5 py-12">

      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-10"
      >
        Frequently Asked <span className="text-orange-500">Questions</span>
      </motion.h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-gray-800/40 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-700/50 hover:border-orange-500/50 transition-all"
          >
            {/* FAQ Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center"
            >
              <span className="font-semibold text-lg">{faq.q}</span>
              <motion.span
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <Minus className="text-orange-400" />
                ) : (
                  <Plus className="text-orange-400" />
                )}
              </motion.span>
            </button>

            {/* FAQ Answer Animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="px-6 pb-5 text-gray-300"
                >
                  <p className="leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
