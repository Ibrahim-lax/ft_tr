// // frontend/src/App.tsx

import React, { useState } from 'react';
import { Code, Terminal, Cpu } from 'lucide-react'; // We use Lucide icons directly

// --- 1. DEFINITIONS (Replacing the missing files) ---

// This replaces: import { User } from '../types';
interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  techStack: string[];
  nexusScore: number;
}

// This replaces: import { Icons } from '../constants';
const Icons = {
  Code: () => <Code size={32} className="text-white" />,
  Terminal: () => <Terminal size={32} className="text-white" />,
};

// --- 2. THE COMPONENT ---

const App = () => {
  // State for the toggle
  const [isLogin, setIsLogin] = useState(true);
  
  // State for the form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Attempting Login with:", { username, password });
      alert(`Logging in as ${username}...`);
    } else {
      console.log("Attempting Signup with:", { username, email, fullName, password });
      alert(`Creating account for ${fullName}...`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]">
      
      {/* Main Card Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-slate-900/40 backdrop-blur-2xl rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-700">
        
        {/* Left Side: Illustration & Intro (Hidden on mobile) */}
        <div className="hidden lg:flex flex-col p-12 bg-gradient-to-br from-indigo-600 to-rose-600 relative overflow-hidden">
          
          {/* Background Texture Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
              <Icons.Code />
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
              Join the <br /> <span className="text-white/80">DevCozy</span> Nexus
            </h1>
            <p className="text-xl text-white/80 max-w-md leading-relaxed">
              Connect with developers worldwide in an aesthetic, high-performance social environment designed for your workflow.
            </p>
          </div>
          
          {/* Stats Section at the bottom */}
          <div className="mt-auto relative z-10 flex gap-12">
            <div>
              <div className="text-3xl font-bold text-white tracking-tight">42k+</div>
              <div className="text-sm text-white/60 font-medium uppercase tracking-widest">Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tight">1.2m</div>
              <div className="text-sm text-white/60 font-medium uppercase tracking-widest">Snippets</div>
            </div>
          </div>

          {/* Glowing Orb Effect */}
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-20 -mb-20 blur-3xl"></div>
        </div>

        {/* Right Side: The Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="mb-10 lg:hidden flex items-center gap-3">
             <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Icons.Code />
             </div>
             <span className="text-2xl font-bold text-white">DevCozy</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{isLogin ? 'Welcome Back' : 'Get Started'}</h2>
            <p className="text-slate-400">{isLogin ? 'Enter your credentials to access your Nexus account.' : 'Create your developer profile today.'}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* These fields only show up if we are NOT logging in (Sign Up mode) */}
            {!isLogin && (
              <>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Full Name</label>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-3 text-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-3 text-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </>
            )}

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-3 text-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder-slate-600"
                placeholder="developer_alias"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-3 text-white focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder-slate-600"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-[2rem] shadow-xl shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLogin ? 'Secure Sign In' : 'Create Nexus Account'}
            </button>
          </form>

          {/* Toggle Button */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-slate-400 hover:text-indigo-400 transition-colors font-medium text-sm"
            >
              {isLogin ? "Don't have an account? Create one" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;