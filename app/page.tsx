"use client";

import { useState, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import quotesData from "../data/quotes.json";

interface Quote {
  id: number;
  text: string;
  author: string;
  topic: string;
}

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Only run on client
    const generatedParticles: Particle[] = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError("Please enter a topic");
      return;
    }

    setIsLoading(true);
    setError("");

    // Simulate loading delay
    setTimeout(() => {
      const filteredQuotes = quotesData.filter((quote: Quote) =>
        quote.topic.toLowerCase().includes(topic.toLowerCase())
      );

      if (filteredQuotes.length === 0) {
        setError(`No quotes found for "${topic}". Try topics like: success, life, happiness, motivation, education, love, friendship, health`);
        setQuotes([]);
      } else {
        // Get 3 random quotes from the filtered results
        const shuffled = filteredQuotes.sort(() => 0.5 - Math.random());
        setQuotes(shuffled.slice(0, 3));
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Animated circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating particles (client only) */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white rounded-full opacity-20 floating-dot`}
              style={{
                ...particle,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              ✨ Motivational Quote Generator ✨
            </h1>
            <p className="text-xl text-purple-200 drop-shadow-md">
              Enter a topic and get inspired with 3 motivational quotes
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Enter a topic (e.g. success, life, happiness)"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-purple-200 backdrop-blur-sm"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? "Loading..." : "Get Quotes"}
              </Button>
            </div>
          </form>

          {error && (
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            </div>
          )}

          {quotes.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-center text-white mb-8 drop-shadow-lg">
                💫 Quotes about &quot;{topic}&quot; 💫
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {quotes.map((quote, index) => (
                  <Card 
                    key={quote.id} 
                    className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-medium text-white">
                        &quot;{quote.text}&quot;
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-purple-200 italic">
                        — {quote.author}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {quotes.length === 0 && !error && !isLoading && (
            <div className="text-center text-purple-200">
              <p className="text-lg mb-2">Enter a topic above to get started!</p>
              <p className="text-sm opacity-80">
                Try: success, life, happiness, motivation, education, love, friendship, health
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full text-center py-4 text-white bg-black/30 mt-12 relative z-20 backdrop-blur-md border-t border-white/10">
        © 2025 Daniyal Ahmed Gul · 
        <a href="mailto:dmn7146@gmail.com" className="underline hover:text-purple-300 transition-colors">Contact</a> · 
        <a href="https://github.com/Daniyal69n" className="underline hover:text-purple-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  );
}
