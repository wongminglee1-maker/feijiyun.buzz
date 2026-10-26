import React from "react";

interface ArticleContentProps {
  content: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  // Parse content into clean sections
  // We can convert markdown headings, tables, blockquotes, code blocks to semantic HTML
  const lines = content.trim().split("\n");
  const renderedElements: React.ReactNode[] = [];

  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let inTable = false;
  let tableBuffer: string[] = [];

  const flushCode = (key: string) => {
    if (codeBuffer.length > 0) {
      renderedElements.push(
        <pre
          key={key}
          className="my-6 p-4 rounded-lg bg-[#17191D] text-[#F7F7F5] font-mono text-xs sm:text-sm overflow-x-auto border border-[#D7D9D6]"
        >
          <code>{codeBuffer.join("\n")}</code>
        </pre>
      );
      codeBuffer = [];
    }
  };

  const flushTable = (key: string) => {
    if (tableBuffer.length > 0) {
      const headerRow = tableBuffer[0];
      const dataRows = tableBuffer.slice(2); // skip separator row

      const parseCells = (row: string) =>
        row
          .split("|")
          .map((c) => c.trim())
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);

      const headers = parseCells(headerRow);

      renderedElements.push(
        <div key={key} className="my-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border border-[#D7D9D6] divide-y divide-[#D7D9D6] bg-white rounded-lg">
            <thead className="bg-[#F7F7F5] font-semibold text-[#17191D]">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 border-r border-[#D7D9D6] last:border-r-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D7D9D6] text-[#17191D]">
              {dataRows.map((dr, rIdx) => {
                const cells = parseCells(dr);
                return (
                  <tr key={rIdx} className="hover:bg-[#F7F7F5]/50 transition-colors">
                    {cells.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-4 py-3 border-r border-[#D7D9D6] last:border-r-0 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: cell.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                        }}
                      />
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      tableBuffer = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block check
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        flushCode(`code-${i}`);
        inCodeBlock = false;
      } else {
        if (inTable) {
          flushTable(`table-${i}`);
          inTable = false;
        }
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Table check
    if (line.startsWith("|")) {
      inTable = true;
      tableBuffer.push(line);
      continue;
    } else if (inTable) {
      flushTable(`table-${i}`);
      inTable = false;
    }

    // Headings
    if (line.startsWith("## ")) {
      renderedElements.push(
        <h2
          key={`h2-${i}`}
          className="text-xl sm:text-2xl font-bold text-[#17191D] mt-10 mb-4 pt-4 border-t border-[#D7D9D6] tracking-tight"
        >
          {line.replace("## ", "")}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      renderedElements.push(
        <h3
          key={`h3-${i}`}
          className="text-lg sm:text-xl font-bold text-[#17191D] mt-6 mb-3"
        >
          {line.replace("### ", "")}
        </h3>
      );
      continue;
    }

    // Horizontal Rule
    if (line.trim() === "---") {
      renderedElements.push(
        <hr key={`hr-${i}`} className="my-8 border-t border-[#D7D9D6]" />
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const bText = line.replace("> ", "");
      renderedElements.push(
        <blockquote
          key={`bq-${i}`}
          className="my-4 p-4 border-l-2 border-[#3457D5] bg-white rounded-r-lg text-xs sm:text-sm text-[#17191D] shadow-xs leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: bText
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/`([^`]+)`/g, "<code class='px-1 py-0.5 rounded bg-[#F7F7F5] font-mono text-xs'>$1</code>"),
          }}
        />
      );
      continue;
    }

    // Lists
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const lText = line.substring(2);
      renderedElements.push(
        <li
          key={`li-${i}`}
          className="ml-5 list-disc text-sm sm:text-base text-[#17191D] my-1.5 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: lText
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/`([^`]+)`/g, "<code class='px-1 py-0.5 rounded bg-[#F7F7F5] font-mono text-xs'>$1</code>"),
          }}
        />
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const match = line.match(/^(\d+)\.\s(.*)$/);
      if (match) {
        renderedElements.push(
          <div key={`ol-${i}`} className="flex items-start gap-2.5 my-2 text-sm sm:text-base text-[#17191D] leading-relaxed">
            <span className="font-mono text-xs font-bold text-[#3457D5] bg-white border border-[#D7D9D6] px-1.5 py-0.5 rounded shrink-0 mt-0.5">
              {match[1]}
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html: match[2]
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/`([^`]+)`/g, "<code class='px-1 py-0.5 rounded bg-[#F7F7F5] font-mono text-xs'>$1</code>"),
              }}
            />
          </div>
        );
        continue;
      }
    }

    // Normal paragraph
    if (line.trim().length > 0) {
      renderedElements.push(
        <p
          key={`p-${i}`}
          className="my-3.5 text-sm sm:text-[16px] text-[#17191D] leading-loose"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/`([^`]+)`/g, "<code class='px-1.5 py-0.5 rounded bg-white border border-[#D7D9D6] font-mono text-xs text-[#17191D]'>$1</code>"),
          }}
        />
      );
    }
  }

  if (inCodeBlock) flushCode("code-end");
  if (inTable) flushTable("table-end");

  return <div className="article-body">{renderedElements}</div>;
};
