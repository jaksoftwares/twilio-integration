import React from 'react';

/**
 * Homepage for the Twilio Inbox Webhook application.
 * Provides status information and visual feedback for the active webhook.
 */
export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_50%_50%,_#1a1a2e_0%,_#0f0f1a_100%)] text-white">
      <div className="max-w-2xl w-full space-y-12 text-center">
        
        {/* Animated Glow Icon */}
        <div className="flex justify-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-[#0f0f1a] border border-gray-800 rounded-full p-6 shadow-2xl">
              <svg 
                className="w-16 h-16 text-blue-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Twilio <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Inbox</span> Webhook
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Securely capturing and processing incoming SMS and WhatsApp communications in real-time.
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-4 bg-emerald-500/10 px-5 py-2.5 rounded-full border border-emerald-500/20">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs">
                Webhook Status: Active
              </span>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-300 font-medium">Listening for events at:</p>
              <div className="group relative">
                <code className="block bg-black/60 px-6 py-4 rounded-xl text-blue-300 font-mono text-sm md:text-base border border-gray-700/50 group-hover:border-blue-500/50 transition-colors">
                  /api/twilio/incoming
                </code>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2"></div>

            <p className="text-gray-500 text-sm italic">
              Ready for database integration and dashboard expansion.
            </p>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="flex justify-center space-x-6 text-gray-600 text-sm font-medium uppercase tracking-widest">
          <span>TypeScript</span>
          <span>•</span>
          <span>Next.js App Router</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </main>
  );
}
