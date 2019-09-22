import React, {useEffect} from 'react';
import ListImage from '../../component/ListImage/ListImage';
import {connect} from 'react-redux';
import {fetchImgs} from '../../store/actions/gallery';

const Gallery = (props) => {


    useEffect(() => {
        props.fetchImgs()},
        []);

    

        console.log(props);

        return (
            <div>
                {
                    props.loading && props.imgs.length !== 0 ? null :
                    <ListImage imgs = {props.imgs}/> 
                }
            </div>
        );
    

}

function mapStateToProps(state){
    return {
        imgs: state.gallery.imgs,
        loading: state.gallery.loading
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchImgs: () => dispatch(fetchImgs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);