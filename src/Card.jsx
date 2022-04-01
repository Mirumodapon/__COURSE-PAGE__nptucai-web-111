import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function MyCard({ title, content, link }) {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 345, margin: '20px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        {link.map((x) => (
          <Link sx={{ fontSize: '1.2em', padding: '5px 10px' }} variant="body1" href={x.url}>
            {x.label}
          </Link>
        ))}
      </CardActions>
    </Card>
  );
}
