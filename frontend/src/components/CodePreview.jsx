function CodePreview({ code }) {
  return (
    <div className="bg-black text-green-300 font-mono p-4 rounded overflow-auto h-96">
      <pre>{code || '// Your generated code will appear here.'}</pre>
    </div>
  );
}

export default CodePreview;
