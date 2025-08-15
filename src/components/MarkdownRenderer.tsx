"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const parseMarkdown = (markdown: string) => {
    const elements: React.ReactNode[] = [];
    const lines = markdown.split("\n");
    let i = 0;
    let elementKey = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith("```")) {
        const language = line.slice(3).trim() || "text";
        const codeLines: string[] = [];
        i++;
        
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        
        const code = codeLines.join("\n");
        const codeId = `code-${elementKey}`;
        
        elements.push(
          <div key={elementKey++} className="relative group my-6">
            <div className="absolute top-0 left-0 px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-tl-lg">
              {getLanguageLabel(language)}
            </div>
            <button
              onClick={() => copyToClipboard(code, codeId)}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-md transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Copy code"
            >
              {copiedCode === codeId ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            <div className="overflow-hidden rounded-lg shadow-xl border border-gray-700">
              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: "2.5rem 1.5rem 1.5rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                  backgroundColor: "#1e1e1e",
                }}
                showLineNumbers={code.split("\n").length > 3}
                wrapLines={true}
                lineNumberStyle={{
                  color: "#858585",
                  paddingRight: "1em",
                  userSelect: "none",
                }}
                lineProps={{
                  style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        );
        i++;
      }
      // Headers
      else if (line.startsWith("# ")) {
        elements.push(
          <h1 key={elementKey++} className="text-3xl font-bold text-gray-900 mt-8 mb-6">
            {line.slice(2)}
          </h1>
        );
        i++;
      }
      else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={elementKey++} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {line.slice(3)}
          </h2>
        );
        i++;
      }
      else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={elementKey++} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {line.slice(4)}
          </h3>
        );
        i++;
      }
      // Tables
      else if (line.includes("|") && i + 1 < lines.length && lines[i + 1].includes("|---")) {
        const tableLines: string[] = [line];
        i += 2; // Skip header and separator
        
        while (i < lines.length && lines[i].includes("|")) {
          tableLines.push(lines[i]);
          i++;
        }
        
        elements.push(renderTable(tableLines, elementKey++));
      }
      // Lists
      else if (line.startsWith("- ") || line.startsWith("* ") || /^\d+\.\s/.test(line)) {
        const listItems: string[] = [line];
        i++;
        
        while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* ") || /^\d+\.\s/.test(lines[i]))) {
          listItems.push(lines[i]);
          i++;
        }
        
        const isOrdered = /^\d+\.\s/.test(listItems[0]);
        elements.push(
          <ul key={elementKey++} className={`${isOrdered ? "list-decimal" : "list-disc"} pl-6 my-4 space-y-2`}>
            {listItems.map((item, index) => (
              <li key={index} className="text-gray-700">
                {parseInlineElements(item.replace(/^[-*]\s|\d+\.\s/, ""))}
              </li>
            ))}
          </ul>
        );
      }
      // Paragraphs
      else if (line.trim()) {
        elements.push(
          <p key={elementKey++} className="text-gray-700 leading-relaxed mb-4">
            {parseInlineElements(line)}
          </p>
        );
        i++;
      } else {
        i++;
      }
    }

    return elements;
  };

  const parseInlineElements = (text: string): React.ReactNode => {
    // Handle inline code with enhanced styling
    text = text.replace(/`([^`]+)`/g, '<code class="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded text-sm font-mono">$1</code>');
    
    // Handle bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
    
    // Handle links with better hover effect
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');
    
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  const renderTable = (lines: string[], key: number) => {
    const headers = lines[0].split("|").filter(h => h.trim());
    const rows = lines.slice(1).map(line => line.split("|").filter(cell => cell.trim()));

    return (
      <div key={key} className="my-6 overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header, i) => (
                    <th
                      key={i}
                      className="px-6 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      {header.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                        {parseInlineElements(cell.trim())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const getLanguageLabel = (language: string): string => {
    const labels: { [key: string]: string } = {
      javascript: "JavaScript",
      js: "JavaScript",
      typescript: "TypeScript",
      ts: "TypeScript",
      python: "Python",
      php: "PHP",
      html: "HTML",
      css: "CSS",
      bash: "Bash",
      shell: "Shell",
      json: "JSON",
      sql: "SQL",
      excel: "Excel",
      sheets: "Google Sheets",
      vba: "VBA",
    };
    return labels[language.toLowerCase()] || language.toUpperCase();
  };

  return <div className="prose-lg max-w-none">{parseMarkdown(content)}</div>;
}