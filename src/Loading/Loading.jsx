import React from 'react';
import style from './Loading.module.css';


class Loading extends React.Component {

    render = () => {
        return (
            <div className={style.loadingContainer}>
                <div className={style.loadingBlock}>loading</div>
            </div>
        );
    }
}

export default Loading;
