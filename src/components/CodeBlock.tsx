import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  return (
    <div className="relative rounded-lg overflow-hidden my-4 shadow-md">
      {/* macOS-style window controls */}
      <div className="flex items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center text-gray-600 text-sm">
          {language}
        </div>
      </div>

      {/* Code block with line numbers */}
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        showLineNumbers={true}
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "#fafafa",
          borderRadius: "0 0 0.5rem 0.5rem",
        }}
        lineNumberStyle={{
          color: "#999",
          marginRight: "1rem",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
