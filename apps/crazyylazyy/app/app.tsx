import { useState } from 'react';

export function App() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // TODO: Add code generation logic
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Crazy Lazy Code Generator
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-lg mb-2">
                Describe your project
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-32 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Example: Create a todo app with React and Express..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 
                ${isGenerating || !prompt.trim() 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {isGenerating ? 'Generating...' : 'Generate Code'}
            </button>
          </form>

          {isGenerating && (
            <div className="mt-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-400">Generating your project...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;