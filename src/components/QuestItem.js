import React from 'react';
import './QuestItem.css';

const QuestItem = ({ title, description, skills, teamMembers }) => {
    return (
        <div className="quest-item">
            <div className="left-content">
                <div className="quest-header">
                    <h3 className="common-font-color">{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="skills">
                    {skills.map(skill => (
                        <span key={skill} className="skill">{skill}</span>
                    ))}
                </div>
            </div>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} />
                        <p className="common-font-color">{member.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestItem;