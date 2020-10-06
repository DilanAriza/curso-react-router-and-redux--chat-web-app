import { number } from 'prop-types';
// IMPORTS ___________________________________________
//React, React Router, Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, compose} from 'redux'

//Reducers
import reducer from './reducers/index';

//App
import App from './routes/App';

// Initial State ___________________________________________
const initialState = {
    "user":{
        // "id": 1,
        // "email": "this_is_my_email@gmail.com",
        // "name":"Dilan Ariza"
        "id":null,
        "email":"",
        "name":""
    },
    "chatOpenId":"",
    "myChats":[
        {
            "id": 1,
            "user__rec__id": 43,
            "user__rec__email":"pepito_43@gmail.com",
            "user__env__id": 2,
            "user__env__email": "this_is_my_email@gmail.com",
            "messages":[
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Hola bro, Bien y tu?",
                    "message_date":"20-12-2020"
                },
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Bien, aquí aburrido",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "¿y eso?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "¿Ya acabaste las tareas?",
                    "message_date":"20-12-2020"
                },
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Si, ahora no se que hacer ajsjasja",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":2,
                    "message_id":1,
                    "message_content": "F",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "F",
                    "message_date":"20-12-2020"
                }
            ]
        },
        {
            "id":2,
            "user__rec__id": 44,
            "user__rec__email":"pepito_44@gmail.com",
            "user__env__id": 2,
            "user__env__email": "this_is_my_email@gmail.com",
            "messages":[
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Dilan, como estas?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Bien profe, y usted?",
                    "message_date":"20-12-2020"
                },
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Bien, aquí esperando tus tareas!",
                    "message_date":"20-12-2020"
                },
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "¿Cuando piensa entregarlas?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Estoy en eso profe, deme mas tiempo",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "He tenido algunos problemas aquí en la casa",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Espero lo entienda.",
                    "message_date":"20-12-2020"
                },
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Mmm, si...",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":2,
                    "message_id":1,
                    "message_content": "Esta bien, el lunes a mas tardar las envia a mi correo, se las califico y queda a paz y salvo conmigo, esta bien?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Si señor!",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Gracias profe.",
                    "message_date":"20-12-2020"
                },
            ]
        },
        {
            "id": 3,
            "user__rec__id": 45,
            "user__rec__email":"pepito_45@gmail.com",
            "user__env__id": 2,
            "user__env__email": "this_is_my_email@gmail.com",
            "messages":[
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                }
            ]
        },
        {
            "id":4,
            "user__rec__id": 46,
            "user__rec__email":"pepito_46@gmail.com",
            "user__env__id": 2,
            "user__env__email": "this_is_my_email@gmail.com",
            "messages":[
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {   
                    "message_id_user_send":2,
                    "message_id":0,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                },
                {
                    "message_id_user_send":43,
                    "message_id":1,
                    "message_content": "Hola bro, ¿Cómo estas?",
                    "message_date":"20-12-2020"
                }
            ]
        },
    ],
    "membersList":[
        {
            "id": 1,
            "email": "pepito_43@gmail.com",
            "name": "Pepito 43 name xd"
        },
        {
            "id": 2,
            "email": "pepito_44@gmail.com",
            "name": "Pepito 44 name xd"
        },
        {
            "id": 3,
            "email": "pepito_45@gmail.com",
            "name": "Pepito 45 name xd"
        },
        {
            "id": 4,
            "email": "pepito_46@gmail.com",
            "name": "Pepito 46 name xd"
        }
    ],
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider> 
    , document.getElementById('app'));