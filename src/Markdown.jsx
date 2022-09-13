import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Markdown({ children }) {
  return (
    <ReactMarkdown
      components={{
        a: ({ node, ...props }) => <Link {...props} />,
        p: ({ node, ...props }) => <Typography varient="body2" color="text.secondary" {...props} />,
        img: ({node, ...prop}) => <img {...prop} width="100%"/>
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
}
