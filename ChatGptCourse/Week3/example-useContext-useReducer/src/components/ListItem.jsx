/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ListItem = ({ image, name, species, status }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {species} {status}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ListItem;
