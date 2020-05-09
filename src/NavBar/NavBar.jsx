import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

class NavBar extends React.Component {

    state = {
        isHiddenPanel: true
    }

    ShowHidePanel = () => {
        if (this.state.isHiddenPanel) {
            this.setState({isHiddenPanel: false})
        }
        if (!this.state.isHiddenPanel) {
            this.setState({isHiddenPanel: true})
        }
    }


    render = () => {
        let classForHidePanel = this.state.isHiddenPanel ? `${style.barPanel} ${style.hide}` : `${style.barPanel}`;
        let classForButton = this.state.isHiddenPanel ? `${style.barButton} ${style.barButtonShow}` : `${style.barButton} ${style.barButtonHide}`;

        return (


            <div className={style.bar}>
                <div className={classForButton} onClick={this.ShowHidePanel}>
                </div>
                <div className={classForHidePanel}>
                    <div className={style.barItem}>
                        <NavLink activeClassName={style.activeLink} to="/monday">Monday</NavLink>
                    </div>

                    <div className={style.barItem}>
                        <NavLink activeClassName={style.activeLink} to="/tuesday">Tuesday</NavLink>
                    </div>
                    <div className={style.barItem}>
                        <NavLink activeClassName={style.activeLink} to="/wednesday">Wednesday</NavLink>
                    </div>
                </div>


            </div>
        );
    }
}

export default NavBar;
