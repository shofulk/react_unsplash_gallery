import React, {useEffect} from 'react';
import Image from '../../component/Image/Image';
import BackButton from '../../component/Navigation/BackButton/BackButton';
import {connect} from 'react-redux';
import {fetchImgUrl} from '../../store/actions/gallery'

const ImgPage = (props) => {

    useEffect(() => {
        props.fetchImgUrl(props.match.params.id);
    }, 
    []);

        console.log(props);
        return (
            <div>
                {props.loading && props.imgUrl === null ? null : 
                <React.Fragment>
                    <BackButton/>
                    <Image url={props.imgUrl} sizeFull={true}/>
                </React.Fragment>
                }
            </div>
        );
}

function mapStateToProps(state){
    return {
        imgUrl: state.gallery.imgUrl
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchImgUrl: idFoto => dispatch(fetchImgUrl(idFoto))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgPage);