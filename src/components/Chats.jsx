//React, React Router, Redux
import React from 'react';
import {connect} from 'react-redux';
import { actions } from '../actions';

//Styles
import '../assets/styles/components/Chats.scss';

//Components
import CardLink from './CardLink';

const Chats = (props) => {

    const userId = 2;

    const {myChats} = props;
    const {id} = props.match.params;

    const renderChats = () =>{
        if(id){
            const chatMessages = myChats.filter(item => item.id === Number(id[0]));
            const messages = (chatMessages.shift()).messages;

            return messages.map(item => 
                (userId === item.message_id_user_send) ?
                <CardLink
                    key={getRamdom()}
                    classTo="chat__user__2"
                    type="chats__message"
                    descriptionCard={item.message_content}
                ></CardLink>:
                <CardLink 
                    key={getRamdom()}
                    classTo="chat__user__1"
                    type="chats__message"
                    descriptionCard={item.message_content}
                ></CardLink>
            )
        }else{
            return <CardLink 
                key={getRamdom()}
                type="home"
                to="/chats"
                titleCard="Bienvenido"
                descriptionCard="Seleciona un Chat para ver los mensajes"
            ></CardLink>
        }
    }

    


    const getRamdom = () => {
        return Math.random() * (20000 - 10000) + 10000; 
    }

    return (
        <div className="chats">
            <div className="slidebar">
                {myChats.map(item => 
                    <CardLink
                        key={item.id}
                        to={`/chat/${item.id}`}
                        type="chats"
                        titleCard={item.user__rec__email}
                    ></CardLink>
                )
                }
            </div>
            <div className="chat__banner">
                <div className="chat__banner__container">
                    {renderChats()}
                    {/* {
                    (id) ? messages.map(item => 
                        userId === item.message_id_user_send ?
                        <CardLink
                            key={getRamdom()}
                            classTo="chat__user__2"
                            type="chats__message"
                            descriptionCard={item.message_content}
                        ></CardLink>:
                        <CardLink 
                            key={getRamdom()}
                            classTo="chat__user__1"
                            type="chats__message"
                            descriptionCard={item.message_content}
                        ></CardLink>
                    ):
                        <CardLink 
                            key={getRamdom()}
                            type="home"
                            to="/</div>"
                            titleCard="Bienvenido"
                            descriptionCard="Seleciona un Chat para ver los mensajes"
                        ></CardLink>
                    } */}
                </div>
                <div className="chat__send">
                    <input 
                        type="text" 
                        name="" 
                        id=""
                    />
                    <button type="submit">Send</button>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        myChats: state.myChats
    };
}

export default connect(mapStateToProps, null)(Chats);