import { textFilter } from 'react-bootstrap-table2-filter'

const activeFormatter = (data, row) => {
    if (!!data) {
        return "Si"
    } else {
        return "No"
    }
};
const dateFormatter = (data, row) => {
    const fecha = new Date(data);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
    return fecha.toLocaleDateString('es-ES', options);
}

export const columns = [
    {
        text: "ID",
        dataField: "id",
        sort: true,
    },
    {
        text: "Codigo",
        dataField: "codigo_usuario",
        sort: true,
        filter: textFilter()
    },
    {
        text: "Nombre",
        dataField: "nombre_usuario",
        sort: true,
        filter: textFilter()
    },
    {
        text: "Contraseña",
        dataField: "contrasena",
        sort: true,
        filter: textFilter()
    },
    {
        text: "Fecha Alta",
        dataField: "fecha_alta",
        sort: true,
        formatter: dateFormatter,
        filter: textFilter(),
    },
    {
        text: "Activo",
        dataField: "activo",
        sort: true,
        formatter: activeFormatter,
        filter: textFilter()
    },
]