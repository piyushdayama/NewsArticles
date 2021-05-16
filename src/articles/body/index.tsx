import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import moment from 'moment'


type listProps = {
    data: any,
    page: number,
    rowsPerPage: number
}

const TableBodyList = ({ data, page, rowsPerPage }: listProps) => {
    return (
        <TableBody>
            {data ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((article: any, index: number) => (
                <TableRow key={index}>
                    <TableCell width="100">
                        <Avatar alt={article.author} src={article.urlToImage} />
                    </TableCell>
                    <TableCell width="50">{article.source.name}</TableCell>
                    <TableCell width="100">{article.author}</TableCell>
                    <TableCell width="200">{article.title}</TableCell>
                    <TableCell width="100">{moment(article.publishedAt).format('DD-MMM-YYYY')}</TableCell>
                    <TableCell width="100">
                        <Link href={article.url} target="_blank"> View More </Link>
                    </TableCell>
                </TableRow>
            )) : null}
        </TableBody>
    )
}

export default TableBodyList