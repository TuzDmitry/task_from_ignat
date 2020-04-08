import React from 'react';
import my from './MyComponent.module.css'

class MyComponent extends React.Component {

    render = () => {
        return (
            <div className={my.block}>
                <div className={my.lastName}>Tuz Dmitry</div>
                <div>домашка от меня №1: создать проект и выложить на github:
                    - создать компоненту, которая красиво будет выводить ваше ФИО
                    - *** создать компоненту, которая будет выводить текст, стилизованно как в телеграмме (имя, текст,
                    время, уголок)
                </div>
                <input className={my.time} type="time" value="12:15" readOnly/>
            </div>
        );
    }
}

export default MyComponent;
