import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Chip,
  CircularProgress,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  Tooltip,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import getFullResource from "../../utils/getFullResource";
import "../../styles/index.css";

const EpisodeLocations = () => {
  const [data, setData] = useState();

  // console.log(data);

  const fetchData = async () => {
    const startTime = new Date().getTime();

    const characters = await getFullResource("character");
    const episodes = await getFullResource("episode");
    const arrayResults = [];
    let originsByCharacters = [];
    let originsByCharactersNoRepeat = [];
    let character_selected = {};

    for (let i = 0; i < episodes.length; i++) {
      arrayResults.push({
        name: episodes[i].name,
        episode: episodes[i].episode,
        locations: [],
      });
      for (const characterURL of episodes[i].characters) {
        character_selected = characters.find(
          (item) => item.url === characterURL
        );
        originsByCharacters.push(character_selected.origin.name);
      }
      originsByCharactersNoRepeat = new Set(originsByCharacters);
      arrayResults[i].locations = [...originsByCharactersNoRepeat];
      originsByCharacters = [];
    }

    const endTime = (new Date().getTime() - startTime) / 1000;
    const in_time = endTime < 3 ? true : false;

    setData({
      exercise_name: "Episode locations",
      time: endTime,
      in_time,
      results: arrayResults,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <div className="page-container page-container__locations">
          <div className="page-container__back">
            <Link to="/">
              <ArrowBackIosNewIcon />
            </Link>
          </div>
          <div className="page-container__title">
            <h1>{data.exercise_name}</h1>
          </div>
          <div className="page-container__info">
            <li>
              para cada <b>episode</b>, indicar la cantidad y un listado con las{" "}
              <b>location</b> <b>(origin)</b> de todos los <b>character</b>
              <br />
              que aparecieron en ese <b>episode</b> (sin repetir).
            </li>
            <li>
              cuánto tardó el programa 👆 en total (desde inicio ejecución hasta
              entrega de resultados)
            </li>
          </div>
          <div className="page-container__body ">
            <TableContainer
              sx={{
                width: 700,
                display: "flex",
                justifyContent: "center",
              }}
              component={Paper}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <Tooltip title="Numero de temporada y episodio">
                      <TableCell align="left">Season and Episode</TableCell>
                    </Tooltip>
                    <Tooltip title="Nombre del episodio">
                      <TableCell align="left">Episode name</TableCell>
                    </Tooltip>
                    <Tooltip title="Listado de locations de todos los characters que aparecieron en dicho episodio">
                      <TableCell align="center">Origins by episode</TableCell>
                    </Tooltip>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.results.map((item) => (
                    <TableRow
                      key={item.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{item.episode}</TableCell>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell align="center">
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          style={{ height: 30 }}
                        >
                          {item.locations.map((location) => (
                            <MenuItem>{location}</MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="page-container__status">
            <div className="page-container__status--time">
              <p>
                Tiempo total de respuesta: <b>{data.time}s</b>
              </p>
              <Chip
                label={data.in_time ? "Buena performance" : "Mala performance"}
                color={data.in_time ? "success" : "error"}
              />
            </div>
            <div className="page-container__status--info">
              <p>
                Para tener una{" "}
                <b style={{ color: "green" }}>buena performance</b> el programa
                debe tardar menos de 3 segundos en responder, de lo contrario
                tendrá una <b style={{ color: "red" }}>mala performance</b>.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default EpisodeLocations;
