import React from "react";
import "tailwindcss/tailwind.css";

export default function SingulAIFont() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
      {/* Logo Centralizada */}
      <img 
        src="/singulAI-logo.png" 
        alt="SingulAI Logo" 
        className="w-32 h-32 animate-pulse"
      />

      {/* Nome com Fonte Misteriosa */}
      <h1 className="text-5xl md:text-6xl font-extrabold mt-4 tracking-widest text-gray-200">
        S I N G U L<span className="text-blue-500">AI</span>
      </h1>

      {/* Slogan ou Subtexto */}
      <p className="text-xl md:text-2xl text-gray-400 mt-2 italic">
        Legado Digital Eterno
      </p>
    </div>
  );
}
