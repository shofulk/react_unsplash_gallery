import axios from 'axios';
import {FETCH_IMGS_SUCCESS,
        FETCH_IMGS_ERROR,
        FETCH_IMGS_START,
        FETCH_IMG_URL_SUCCESS} from './actionTypes';

export function fetchImgs(){
    return async dispatch => {
        dispatch(fetchImgsStart());
        try{

            let response = await axios.get(`https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`);
            dispatch(fetchImgsSuccess(response.data));
        }catch(e){
            dispatch(fetchImgsError(e));
        }

        
    }
}

export function fetchImgUrl(idFoto){
    return async dispatch => {
        try{
            dispatch(fetchImgsStart());
            let response = await axios.get(`https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`);
            let items = response.data;
            let img = items.filter((item) => {return item.id === idFoto})[0];
            dispatch(fetchImgUrlSuccess(img.urls.full));
        }catch(e){
            dispatch(fetchImgsError(e));
        }
    }
}

export function fetchImgsStart() {
    return {
        type: FETCH_IMGS_START
    }
}

export function fetchImgsSuccess(imgs){
    return {
        type: FETCH_IMGS_SUCCESS,
        imgs
    }

}

export function fetchImgsError(e){
    return {
        type: FETCH_IMGS_ERROR,
        error: e
    }
}

export function fetchImgUrlSuccess(url){
    return {
        type: FETCH_IMG_URL_SUCCESS,
        url
    }
}