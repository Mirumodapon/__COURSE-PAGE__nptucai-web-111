import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Link from '@mui/material/Link';

export default function Markdown({ children }) {
  return (
    <ReactMarkdown
      components={{
        a: ({ node, ...props }) => <Link {...props} />
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
}
