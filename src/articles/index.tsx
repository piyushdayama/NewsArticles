import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import ArticleTableHeader from './header';
import ArticleTableBody from './body'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as articleReducer from '../reducers/articleReducer'


type articleProps = {
    articles: any,
    getNewsArticles: any
}

const Articles = ({ articles, getNewsArticles }: articleProps) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        getNewsArticles()
    }, [getNewsArticles])
    console.log('articles', articles)

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <ArticleTableHeader />
                    <ArticleTableBody {...{ data: articles, page, rowsPerPage }} />
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 100]}
                component="div"
                count={articles.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const mapStateToProps = (state: any) => {
    return {
        articles: state.articleReducer.articles
    }
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ ...articleReducer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
