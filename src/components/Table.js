import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';
import { columns } from '../Helper/columns';

export const Table = ({ data }) => {
    return (
        <div className='container'>
            <div className='content'>
                <BootstrapTable
                    bootstrap4
                    striped
                    hover
                    condensed
                    keyField='id'
                    columns={columns}
                    data={data}
                    pagination={paginationFactory()}
                    filter={filterFactory()}
                />
            </div>
        </div>
    )
}
