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
  Tooltip,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import getFullResource from "../../utils/getFullResource";
import "../../styles/index.css";

const CharCounter = () => {
  const [data, setData] = useState();

  // console.log(data);

  const fetchData = async () => {
    const startTime = new Date().getTime();

    const characters = await getFullResource("character");
    const episodes = await getFullResource("episode");
    const locations = await getFullResource("location");

    let charactersWithC = 0;
    let episodesWithE = 0;
    let locationsWithL = 0;
    let matches;

    for (const character of characters) {
      matches = character.name.toLowerCase().match(/c/g);
      if (matches) {
        charactersWithC += matches.length;
      }
    }

    for (const episode of episodes) {
      matches = episode.name.toLowerCase().match(/e/g);
      if (matches) {
        episodesWithE += matches.length;
      }
    }

    for (const location of locations) {
      matches = location.name.toLowerCase().match(/l/g);
      if (matches) {
        locationsWithL += matches.length;
      }
    }

    const endTime = (new Date().getTime() - startTime) / 1000;
    const in_time = endTime < 3 ? true : false;

    setData({
      exercise_name: "Char counter",
      time: endTime,
      in_time,
      results: [
        {
          char: "l",
          count: locationsWithL,
          resource: "location",
        },
        {
          char: "e",
          count: episodesWithE,
          resource: "episode",
        },
        {
          char: "c",
          count: charactersWithC,
          resource: "character",
        },
      ],
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <div className="page-container">
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
              cuántas veces aparece la letra <b>"l"</b> (case insensitive) en
              los nombres de todos los <b>location</b>
            </li>
            <li>
              cuántas veces aparece la letra <b>"e"</b> (case insensitive) en
              los nombres de todos los <b>episode</b>
            </li>
            <li>
              cuántas veces aparece la letra <b>"c"</b> (case insensitive) en
              los nombres de todos los <b>character</b>
            </li>
            <li>
              cuánto tardó el programa 👆 en total (desde inicio ejecución hasta
              entrega de resultados)
            </li>
          </div>
          <div className="page-container__body">
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
                    <Tooltip title="Tipo de recurso">
                      <TableCell align="center">Resource</TableCell>
                    </Tooltip>
                    <Tooltip title="Caracter que se filtrara segun el name">
                      <TableCell align="center">Char to filter</TableCell>
                    </Tooltip>
                    <Tooltip title="Cantidad de veces que se repite el caracter en el name">
                      <TableCell align="center">Count</TableCell>
                    </Tooltip>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.results.map((item) => (
                    <TableRow
                      key={item.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{item.resource}</TableCell>
                      <TableCell align="center">{item.char}</TableCell>
                      <TableCell align="center">{item.count}</TableCell>
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

export default CharCounter;
