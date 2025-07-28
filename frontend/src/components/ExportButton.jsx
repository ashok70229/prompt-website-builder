function ExportButton({ code }) {
  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'generated-ui.html';
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Export as HTML
    </button>
  );
}

export default ExportButton;
