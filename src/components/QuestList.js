import React from 'react';
import QuestItem from './QuestItem';
import './QuestList.css';

const QuestList = ({ quests }) => {
    return (
        <div className="quest-list">
            {quests.map((quest, index) => (
                <QuestItem
                    key={index}
                    title={quest.title}
                    description={quest.description}
                    skills={quest.skills}
                    teamMembers={quest.teamMembers}
                    link={quest.link}
                    titleColor={quest.titleColor}
                />
            ))}
        </div>
    );
};

export default QuestList;
