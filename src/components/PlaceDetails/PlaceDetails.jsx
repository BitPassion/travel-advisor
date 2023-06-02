import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

// Styles
import useStyles from "./styles";

// Place Details
const PlaceDetails = ({ place, selected, refProp }) => {
  // get current selected place from map
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const classes = useStyles();
  return (
    <Card elevation={6}>
      {/* Place Image */}
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name || "N/A"}
      />

      <CardContent>
        {/* Place Name */}
        <Typography gutterBottom variant="h5">
          {place.name || "N/A"}
        </Typography>

        {/* Place Rating */}
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>

        {/* Place Price Level */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level || "N/A"}
          </Typography>
        </Box>

        {/* Place Ranking */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking || "N/A"}
          </Typography>
        </Box>

        {/* Place Awards */}
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between">
            <img my={1} src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {/* Place cuisine */}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}

        {/* Place Address */}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {/* Place Phone No */}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        {/* Place trip advisor website */}
        <CardActions>
          {place.web_url ? (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip Advisor
            </Button>
          ) : null}

          {/* Place official website */}
          {place.website ? (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </Button>
          ) : null}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
