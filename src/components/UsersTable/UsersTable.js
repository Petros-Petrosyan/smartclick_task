import React, { useState } from 'react';

// table
import Paper from '@material-ui/core/Paper';
import {
    FilteringState,
    IntegratedFiltering,
    PagingState,
    IntegratedPaging,
    RowDetailState,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableFilterRow,
    PagingPanel,
    TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';

// components
import { Map } from './Map/Map';


const UsersTable = (props) => {
    const {rows, columns} = props;
    const [filters, setFilters] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(50);
    const [pageSizes] = useState([50, 100, 150]);

    return (
        <Paper>
            <Grid rows={rows} columns={columns} >
                <RowDetailState defaultExpandedRowIds={[0]} />
                <PagingState
                    currentPage={currentPage}
                    onCurrentPageChange={setCurrentPage}
                    pageSize={pageSize}
                    onPageSizeChange={setPageSize}
                />
                <IntegratedPaging />
                <FilteringState filters={filters} onFiltersChange={setFilters} />
                <IntegratedFiltering />
                <Table />
                <TableHeaderRow />
                <TableFilterRow />
                <TableRowDetail contentComponent={Map} />
                <PagingPanel pageSizes={pageSizes} />
            </Grid>
        </Paper>
    )
}

export { UsersTable }