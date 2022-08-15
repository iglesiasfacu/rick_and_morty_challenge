import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "./Home.css";
import rickAndMort from "../../assets/ram.jpg";
import rickImage from "../../assets/rick.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container__title">
        <h1>Rick and Morty Challenge</h1>
      </div>
      <div className="home-container__body">
        <Card sx={{ maxWidth: 345 }}>
          <Link to="/charCounter">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={rickImage}
                alt="rick_image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Contador de Caracteres
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cuenta la cantidad de veces que se repite un determinado
                  caracter en el nombre de cada recurso
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </CardActionArea>
          </Link>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <Link to="/episodeLocations">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={rickAndMort}
                alt="rick_and_morty_image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ubicaciones de episodios
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lista todos los episodios y muestra las ubicaciones de origen
                  de todos los personajes que participaron en dicho episodio
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;
