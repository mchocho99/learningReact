import { useContext, useEffect } from "react";

import { actions, AppContext } from "./context/AppContext";

import { getPeople } from "./api/StarWarsApi";

import { useApi } from "./hooks/useApi";
import { useData } from "./hooks/useData";

import List from "./components/List";
import SearchBar from "./components/SearchBar";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";

import "./App.css";

function App() {
  const { state: filter } = useContext(AppContext);
  const { response, loading, error } = useApi(getPeople);
  const { data, setData } = useData(response);

  useEffect(() => {
    if (filter && data) {
      const filtered = data.filter((d) => d.name === filter);
      console.log(filtered);
      setData([]);
    }
  }, [filter]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <>
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Error Ocurred
            </AlertTitle>
            <AlertDescription maxWidth="sm">{error}.</AlertDescription>
          </Alert>
        </>
      ) : (
        <>
          <SearchBar action={actions.SET_FILTER} />
          {data && <List people={data} />}
        </>
      )}
    </>
  );
}

export default App;

/*
 * Crea una app que sirva para listar los personajes de Star Wars y que te permita
 * buscarlos por nombre.
 *
 * Requisitos:
 * - Usa el API https://swapi.dev ✔️
 * - El diseño es de libre elección. ✔️
 * - Debe mostrar un listado y un detalle de cada personaje. ✔️
 * - El listado tendrá que estar paginado.
 * - El listado poseerá un filtro de búsqueda. ✔️
 * - Al seleccionar un personaje del listado, el detalle mostrará los datos que
 *   consideres oportunos.
 * - OPCIONAL: Detalle de películas, vehículos, naves, especies...
 * - OPCIONAL: Foto de cada personaje.
 */
