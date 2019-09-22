import {FETCH_IMGS_SUCCESS,
        FETCH_IMGS_ERROR,
        FETCH_IMGS_START,
        FETCH_IMG_URL_SUCCESS} from '../actions/actionTypes';

let initialState = {
    loading: false,
    imgs: [],
    imgUrl: ''
}

export function galleryReducer(state = initialState, action){
    
    switch(action.type){
        case FETCH_IMGS_START: return {...state, loading: true, imgUrl: ''}
        case FETCH_IMGS_SUCCESS: return { ...state, imgs: action.imgs, loading: false}
        case FETCH_IMGS_ERROR: return { ...state, loading: true, error: action.error}
        case FETCH_IMG_URL_SUCCESS: return { ...state, loading: false, imgUrl: action.url}
        default: return state;
    }

}