//React, React Router
import React from 'react'

//Styles
import '../assets/styles/components/Chats.scss';

//Components
import CardLink from './CardLink';

const Chats = props => {
    return (
        <div className="chats">
            <div className="slidebar">
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 1"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 2"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 3"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 4"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 5"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 6"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 7"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 8"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 9"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 10"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 12"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 13"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 14"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 15"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 16"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 17"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 18"}
                ></CardLink>
                <CardLink
                    to={`/chat/${2}`}
                    type="chats"
                    titleCard={"Chat 19"}
                ></CardLink>
            </div>
            <div className="chat__banner">
                <div className="chat__banner__container">
                    <CardLink 
                        classTo="chat__user__1"
                        type="chats__message"
                        to="/chats"
                        titleCard={"Members"} 
                        descriptionCard={"Coming from the Latin word membrum, it can refer to each extremity of animals or human beings that is articulated with the trunk."}
                    ></CardLink>
                    <CardLink 
                        classTo="chat__user__1"
                        type="chats__message"
                        to="/chats"
                        titleCard={"Members"} 
                        descriptionCard={"Coming from the Latin word membrum, it can refer to each extremity of animals or human beings that is articulated with the trunk."}
                    ></CardLink>
                    <CardLink 
                        classTo="chat__user__1"
                        type="chats__message"
                        to="/chats"
                        titleCard={"Members"} 
                        descriptionCard={"Coming from the Latin word membrum, it can refer to each extremity of animals or human beings that is articulated with the trunk."}
                    ></CardLink>
                    <CardLink 
                        classTo="chat__user__1"
                        type="chats__message"
                        to="/chats"
                        titleCard={"Members"} 
                        descriptionCard={"Coming from the Latin word membrum, it can refer to each extremity of animals or human beings that is articulated with the trunk."}
                    ></CardLink>
                    <CardLink 
                        classTo="chat__user__2"
                        type="chats__message"
                        to="/chats"
                        titleCard={"Members"} 
                        descriptionCard={"Coming from the Latin word membrum, it can refer to each extremity of animals or human beings that is articulated with the trunk."}
                    ></CardLink>
                    <CardLink 
                        classTo="chat__user__1"
                        type="chats__message"
                        to="/chats"
                        titleCard={"Members"} 
                        descriptionCard={"Coming from the Latin word membrum, it can refer to each extremity of animals or human beings that is articulated with the trunk."}
                    ></CardLink>
                    <CardLink 
                        classTo="chat__user__1"
                        type="chats__message"
                        to="/chats"
                        titleCard={"Members"} 
                        descriptionCard={"Coming from the Latin word membrum, it can refer to each extremity of animals or human beings that is articulated with the trunk."}
                    ></CardLink>
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

export default Chats;