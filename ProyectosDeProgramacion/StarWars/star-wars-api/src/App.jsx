import { useEffect, useState } from "react";

import List from "./components/List";
import SearchBar from "./components/SearchBar";

import { Spinner } from "@chakra-ui/react";

import { getPeople } from "./api/StarWarsApi";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState(null);
  const [peopleFiltered, setPeopleFiltered] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setLoading(true);

    getPeople().then((response) => {
      setLoading(false);
      setPeople(response.data.results);
    });
  }, []);

  useEffect(() => {
    if (filter) {
      setPeopleFiltered(people.filter((p) => p.name === filter));
    } else {
      setPeopleFiltered(people);
    }
  }, [filter, people]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <SearchBar value={filter} setValue={setFilter} />
          {peopleFiltered && <List people={peopleFiltered} />}
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
