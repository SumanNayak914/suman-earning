import React from "react";
import { motion } from "framer-motion";
import { Gift, Users, Share2, ArrowRight } from "lucide-react";

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-200 p-6 flex flex-col items-center mt-10">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 drop-shadow-sm">
          Refer & Earn Rewards 🎁
        </h1>
        <p className="text-gray-700 max-w-md mx-auto text-lg">
          Invite friends using your referral code and earn rewards when they join and stay active.
        </p>
      </motion.div>

      {/* Referral Box */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center border border-orange-200"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center justify-center mb-5"
        >
          <Gift className="w-12 h-12 text-orange-600" />
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Referral Code</h2>
        <p className="text-orange-700 font-mono font-extrabold text-2xl tracking-widest">
          RUN12345
        </p>

        <button
          className="mt-5 w-full bg-orange-600 text-white py-3 rounded-2xl font-semibold hover:bg-orange-700 active:scale-95 transition flex items-center justify-center gap-2 shadow-md"
        >
          <Share2 className="w-5 h-5" /> Share Referral Link
        </button>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12 w-full max-w-md">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center border border-orange-100"
        >
          <Users className="w-10 h-10 text-orange-600 mb-3" />
          <h3 className="font-bold text-gray-900 text-lg">Invite Friends</h3>
          <p className="text-sm text-gray-700">Share your invite link with others.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center border border-orange-100"
        >
          <Gift className="w-10 h-10 text-orange-600 mb-3" />
          <h3 className="font-bold text-gray-900 text-lg">Earn Rewards</h3>
          <p className="text-sm text-gray-700">Earn bonus coins when they join.</p>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 w-full max-w-md"
      >
        <button className="w-full bg-black text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold hover:bg-gray-900 active:scale-95 transition shadow-md">
          Start Inviting <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}