import { useState } from 'react';

function PromptForm({ prompt, setPrompt, framework, setFramework, setGeneratedCode }) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, framework }),
    });
    const data = await res.json();
    setGeneratedCode(data.code || '// Failed to generate');
    setLoading(false);
  };

  return (
    <div className="space-y-4 mb-6">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows="4"
        className="w-full border p-2 rounded"
        placeholder="Enter your UI prompt here..."
      />
      <select
        value={framework}
        onChange={(e) => setFramework(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="material-ui">Material-UI</option>
        <option value="bootstrap">Bootstrap</option>
        <option value="antd">Ant Design</option>
      </select>
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate UI'}
      </button>
    </div>
  );
}

export default PromptForm;
