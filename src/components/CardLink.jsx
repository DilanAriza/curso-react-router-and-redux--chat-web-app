import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/components/Card.scss';
 
const CardLink = props => {
    const {titleCard, descriptionCard, to, type, classTo} = props;
    return(
        <>
        {
            type === "home" &&
            <Link to={to}>
                <div className={`card__home ${classTo}`}>
                    <div className="card-header">
                        <span>{titleCard}</span>
                    </div>
                    <div className="card-body">
                        <p>
                            {descriptionCard}
                        </p>            
                    </div>
                </div>    
            </Link>
        }
        { type === "chats" &&
            <Link to={to}>
                <div className="card__chat">
                    <div className="card-header">
                        <span>{titleCard}</span>
                    </div>
                </div>    
            </Link>
        }
        { type === "chats__message" &&
            <div className={`card__chat__message ${classTo}`}>
                <div className="card-body">
                    <p>
                        {descriptionCard}
                    </p>            
                </div>
            </div>   
        }
        </>
    )
}

export default CardLink;