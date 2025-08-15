interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown to HTML conversion
  const processMarkdown = (text: string): string => {
    // Process headers
    text = text.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>');
    text = text.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>');
    text = text.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mb-6">$1</h1>');
    
    // Process bold text
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
    
    // Process italic text
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Process inline code
    text = text.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 bg-gray-100 rounded text-sm font-mono">$1</code>');
    
    // Process links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
    
    // Process unordered lists
    text = text.replace(/^\- (.+)$/gm, '<li class="ml-6 list-disc">$1</li>');
    text = text.replace(/(<li class="ml-6 list-disc">.*<\/li>\n?)+/g, (match) => {
      return `<ul class="my-4 space-y-2 text-gray-700">${match}</ul>`;
    });
    
    // Process ordered lists
    text = text.replace(/^\d+\. (.+)$/gm, '<li class="ml-6 list-decimal">$1</li>');
    text = text.replace(/(<li class="ml-6 list-decimal">.*<\/li>\n?)+/g, (match) => {
      return `<ol class="my-4 space-y-2 text-gray-700">${match}</ol>`;
    });
    
    // Process code blocks
    text = text.replace(/```[\s\S]*?```/g, (match) => {
      const code = match.replace(/```[a-z]*\n?/, '').replace(/```/, '');
      return `<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"><code class="text-sm">${code}</code></pre>`;
    });
    
    // Process paragraphs
    text = text.split('\n\n').map(paragraph => {
      paragraph = paragraph.trim();
      if (!paragraph) return '';
      
      // Skip if it's already an HTML element
      if (paragraph.startsWith('<')) return paragraph;
      
      // Skip if it's a list item
      if (paragraph.includes('<li')) return paragraph;
      
      return `<p class="text-gray-700 mb-4 leading-relaxed">${paragraph}</p>`;
    }).join('\n');
    
    return text;
  };

  const html = processMarkdown(content);

  return (
    <div 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}