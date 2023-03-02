import { useState, useEffect } from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import { Table } from './components/Table'; // importa el componente Table para renderizar los datos
import { getUser } from './Api/getUser'; // importa la función getUser para obtener datos de usuario

function App() {
  const [user, setUser] = useState([]); // utiliza el hook useState para establecer un estado inicial de user como una matriz vacía
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    getUser(serverUrl, setUser); // utiliza el hook useEffect para llamar a la función getUser y almacenar los datos recuperados en el estado user
  }, []);

  return (
    <>
      <Table data={user} />  {/*renderiza el componente Table y pasa los datos recuperados como una propiedad*/}
    </>
  );
}

export default App; // exporta el componente App como el componente principal de la aplicación
