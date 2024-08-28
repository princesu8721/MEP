import React from 'react';
import './QuestItem.css';

const QuestItem = ({ title, description, skills, teamMembers, link, titleColor }) => {
    return (
        <div className="quest-item">
            <div className="left-content">
                <div className="quest-header">
                    <h3>
                        <a style={{ color: titleColor }} href={link} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                    </h3>
                    <p>{description}</p>
                </div>
                <div className="skills">
                    {skills.map(skill => (
                        <span style={{ backgroundColor: titleColor }} key={skill} className="skill">{skill}</span>                       
                    ))}
                </div>
            </div>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} />
                        <p style={{ color: titleColor }}>{member.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestItem;