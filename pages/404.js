import React from 'react';
import Layout from '../components/layout/Layout';
import TypewriterText from '../components/ui/TypewriterText';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <div className="glitch-container mb-6">
          <h1 className="text-6xl md:text-8xl font-bold glitch-text">404</h1>
        </div>
        
        <TypewriterText 
          text="ERROR: File not found. System malfunction." 
          className="text-xl md:text-2xl mb-8"
        />
        
        <div className="terminal-box p-4 mb-8 max-w-lg">
          <p className="text-left mb-2">
            <span className="text-terminal-yellow">root@arcade</span>:<span className="text-terminal-blue">~</span>$ locate requested_page
          </p>
          <p className="text-left mb-2">locate: no results found</p>
          <p className="text-left mb-2">
            <span className="text-terminal-yellow">root@arcade</span>:<span className="text-terminal-blue">~</span>$ suggest_alternative
          </p>
          <p className="text-left">Try returning to the home directory...</p>
        </div>
        
        <Link href="/" className="terminal-btn px-6 py-3 hover:bg-terminal-green hover:text-terminal-black transition-colors">
          Return to Home
        </Link>
      </div>
    </Layout>
  );
}