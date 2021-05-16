import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell width="100">Image</TableCell>
                <TableCell width="50">Source</TableCell>
                <TableCell width="100">Author</TableCell>
                <TableCell width="200">Title</TableCell>
                <TableCell width="100">Date</TableCell>
                <TableCell width="100">URL</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default TableHeader