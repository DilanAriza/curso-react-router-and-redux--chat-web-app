import React from 'react'
import { connect } from 'react-redux'

import '../assets/styles/components/Members.scss';
import CardLink from './CardLink';

const Members = (props) => {

    const { membersList } = props;
    
    return (
        <div className="members">
            {membersList.map(member=>
            <CardLink 
                key={membersList.id}
                to="/members"
                type="chats"
                titleCard={member.name}
            />    
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        membersList: state.membersList,
    };
}
export default connect(mapStateToProps, null)(Members)