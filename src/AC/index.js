import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT, ADD_ID_TO_ARTICLES} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function addComment(user, text, articleId){
    return {
        type: ADD_COMMENT,
        payload: {
            user,
            text,
            articleId
        }
    }
}

export function addIdToArticles(articleId, commentId){
    return {
        type: ADD_ID_TO_ARTICLES,
        payload: {
            articleId,
            commentId
        }
    }
}