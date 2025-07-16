import React from "react";
import Scrolling from "./Scrolling";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 bg-purple-800">
        <h1 className="text-2xl font-bold">🚀 Degen Doge</h1>
        <div className="flex justify-center gap-x-3">
        {/* <button className="cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition">
          Gallery
        </button> */}
        <button className="cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition">
          Buy Now
        </button>
        </div>
        
      </nav>

      {/* scrolling div here */}
      <Scrolling/>


      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-4 py-20">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to DEGEN DOGE!</h2>
        <p className="max-w-xl mb-6 text-lg text-gray-300">
          The craziest coin on the blockchain. We don’t promise you the moon — we promise memes.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
          Join the Revolution
        </button>
      </section>

      {/* Tokenomics */}
      <section className="bg-purple-700 py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-8">🪙 Tokenomics</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-800 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">Total Supply</h4>
            <p>1,000,000,000 Degen Doge </p>
          </div>
          <div className="bg-purple-800 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">Liquidity</h4>
            <p>Locked Forever 🔒</p>
          </div>
          <div className="bg-purple-800 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">Team & Marketing</h4>
            <p>5% reserved for future marketing, listings, and project development</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-8">🗺️ Roadmap</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-800 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">Phase 1</h4>
            <p>Launch & Meme Domination</p>
          </div>
          <div className="bg-purple-800 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">Phase 2</h4>
            <p>DEX Listing & 10K Holders</p>
          </div>
          <div className="bg-purple-800 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">Phase 3</h4>
            <p>Merch, NFTs, and World Takeover</p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-purple-700 py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-8">💬 Join the Community</h3>
        <p className="max-w-xl mx-auto mb-6 text-lg text-gray-300">
          Be part of the DEGEN DOGE army. Connect with us on  Twitter!
        </p>
        <div className="flex justify-center gap-4">
          {/* <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
            Telegram
          </button>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
            Discord
          </button> */}
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
            Twitter
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 py-6 text-center">
        <p className="text-gray-400">&copy; 2025 Degen doge. All rights reserved. 🚀</p>
      </footer>
    </div>
  );
}
