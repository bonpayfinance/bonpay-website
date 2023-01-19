import { CopyBlock, obsidian } from "react-code-blocks";

function CodeBlock({ code, language, showLineNumbers }:{code: string, language: string, showLineNumbers: boolean}) {
  return <CopyBlock
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    theme={obsidian}
    codeBlock
  />;
}

export default CodeBlock