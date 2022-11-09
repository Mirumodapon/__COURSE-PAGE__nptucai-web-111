import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Markdown from './Markdown';

export default function MyCard({ title, content, link }) {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 345, margin: '20px', padding: '10px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Markdown>{content}</Markdown>
      </CardContent>
      <CardActions>
        {link.map((x, n) => (
          <Link
            sx={{ fontSize: '1.2em', margin: '0 8px' }}
            variant="body1"
            href={x.url.indexOf('http') !== -1 ? x.url : `${window.location.href}${x.url}`}
            key={n}
          >
            {x.label}
          </Link>
        ))}
      </CardActions>
    </Card>
  );
}
