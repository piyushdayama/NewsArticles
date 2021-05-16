
import { Reducer, Dispatch } from 'redux';

export interface InitialStateInterface { articles: any; }

const initialState: InitialStateInterface = { articles: [] };

enum ArticleActionTypes { ARTICLE_LIST_RESPONSE = 'ARTICLE_LIST_RESPONSE' }

interface ArticleActionInterface {
    type: ArticleActionTypes.ARTICLE_LIST_RESPONSE;
    payload: any;
}

type ArticleActions = ArticleActionInterface;


export const articleReducer: Reducer<InitialStateInterface, ArticleActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ArticleActionTypes.ARTICLE_LIST_RESPONSE: {
            return {
                ...state,
                articles: action.payload
            };
        }
        default:
            return state;
    }
};

export const getNewsArticles = () => {
    return async (dispatch: Dispatch) => {
        try {

            const result = await getArticleDetails()
            const { articles } = result
            dispatch({
                type: ArticleActionTypes.ARTICLE_LIST_RESPONSE, payload: articles
            })
        } catch (err) {
            console.error(err);
        }
    };
};

const getArticleDetails = () => {
    const API_KEY = 'adc2441b21ac4fd2ae64a253fd1d112e43093504'
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
        .then((response: any) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
}