import { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [framework, setFramework] = useState('bootstrap');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setCode('');
    try {
      const response = await fetch('http://localhost:3000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, framework }),
      });

      const data = await response.json();
      setCode(data.code || 'No code generated.');
    } catch (err) {
      console.error('Error:', err);
      setCode('Failed to generate code.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'generated-ui.html';
    link.click();
  };

  return (
    <div className="app" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Prompt-based Website Builder</h1>

      <div style={{ marginBottom: '1rem' }}>
        <textarea
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Select Framework: </label>
        <select value={framework} onChange={(e) => setFramework(e.target.value)}>
          <option value="bootstrap">Bootstrap</option>
          <option value="material-ui">Material-UI</option>
          <option value="antd">Ant Design</option>
        </select>
      </div>

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate UI'}
      </button>

      {code && (
        <>
          <h2>Generated Code</h2>
          <pre
            style={{
              background: '#f0f0f0',
              padding: '1rem',
              border: '1px solid #ccc',
              maxHeight: '300px',
              overflow: 'auto',
              marginBottom: '1rem',
            }}
          >
            {code}
          </pre>

          {/* Preview */}
          <h3>Live Preview</h3>
          <iframe
            title="Live UI"
            srcDoc={code}
            style={{ width: '100%', height: '300px', border: '1px solid #ccc' }}
          />

          {/* Download Button */}
          <div style={{ marginTop: '1rem' }}>
            <button onClick={handleDownload}>Download HTML</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
