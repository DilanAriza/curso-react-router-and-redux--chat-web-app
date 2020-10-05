import React from 'react';
import '../assets/styles/components/Home.scss';
import CardLink from './CardLink';

const Home = () => (
    <div className="home">
        <CardLink 
            type="home"
            to="/chats"
            titleCard={"Chats"} 
            descriptionCard={"also known as cyber chat, it is one of the digital communication methods that emerged with new technologies."}
        ></CardLink>
        <CardLink 
            type="home"
            to="/members"
            titleCard={"Members"} 
            descriptionCard={"Coming from the Latin word membrum, it can refer to each extremity of animals or human beings that is articulated with the trunk."}
        ></CardLink>
    </div>
);

export default Home;