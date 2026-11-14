"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Trim the code value to remove extra whitespace and newlines
  const trimmedValue = value.trim();

  return (
    <div className="relative my-4 max-w-full overflow-hidden border-2 border-ink bg-sheet-2 shadow-paper-sm">
      {/* Window controls */}
      <div className="flex items-center border-b border-ink/20 bg-sheet px-3 py-2">
        <div className="flex space-x-1 sm:space-x-2">
          <div className="w-2 h-2 rounded-full bg-tomato sm:w-3 sm:h-3" />
          <div className="w-2 h-2 rounded-full bg-highlight sm:w-3 sm:h-3" />
          <div className="w-2 h-2 rounded-full bg-mint sm:w-3 sm:h-3" />
        </div>
        <div className="flex-1 text-center font-mono text-xs uppercase tracking-wide text-ink-2">
          {language}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 border border-ink bg-butter px-2 py-1 font-mono text-xs text-ink transition-colors duration-200 hover:bg-highlight"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code block with line numbers */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="min-w-full inline-block">
          <SyntaxHighlighter
            language={language}
            style={oneLight}
            showLineNumbers={true}
            wrapLines={true}
            customStyle={{
              margin: 0,
              padding: "0.75rem 1rem",
              background: "transparent",
              borderRadius: 0,
              fontSize: "0.75rem", // 12px on mobile
              lineHeight: "1.4",
              minWidth: "100%",
              width: "auto",
            }}
            lineNumberStyle={{
              color: "#69707F",
              marginRight: "0.75rem",
              minWidth: "2rem",
              fontSize: "0.75rem",
            }}
            wrapLongLines={true}
            useInlineStyles={true}
          >
            {trimmedValue}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
