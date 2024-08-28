import React, { useState } from 'react';
import Navbar from './components/Navbar';
import YearNavigation from './components/YearNavigation';
import QuestList from './components/QuestList';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
    const [selectedYear, setSelectedYear] = useState(2024);
    const years = [2019, 2020, 2021, 2022, 2023, 2024];

    const quests = [
      {
          year: 2024,
          title: "Project Number 1",
          description: "Very brief description of the Project Number 1 in a single sentence.",
          skills: ["Java", "Kafka", "AWS", "React"],
          teamMembers: [
              { name: "Test 1", image: "https://i.pravatar.cc/50?img=1" },
              { name: "Test 2", image: "https://i.pravatar.cc/50?img=2" },
              { name: "Test 3", image: "https://i.pravatar.cc/50?img=3" },
              { name: "Test 4", image: "https://i.pravatar.cc/50?img=4" },
              { name: "Test 5", image: "https://i.pravatar.cc/50?img=5" },
              { name: "Test 6", image: "https://i.pravatar.cc/50?img=6" },
          ],
          link: "https://www.google.com",
          titleColor: 'red'
      },
      {
        year: 2024,
        title: "Project Number 2",
        description: "Very brief description of the Project Number 1 in a single sentence.",
        skills: ["Java", "Kafka", "AWS", "React"],
        teamMembers: [
            { name: "Test 1", image: "https://i.pravatar.cc/50?img=1" },
            { name: "Test 2", image: "https://i.pravatar.cc/50?img=2" },
            { name: "Test 3", image: "https://i.pravatar.cc/50?img=3" },
            { name: "Test 4", image: "https://i.pravatar.cc/50?img=4" },
            { name: "Test 5", image: "https://i.pravatar.cc/50?img=5" },
            { name: "Test 6", image: "https://i.pravatar.cc/50?img=6" },
        ],
        link: "https://www.google.com",
          titleColor: 'green'
    },
    {
      year: 2024,
      title: "Project Number 3",
      description: "Very brief description of the Project Number 1 in a single sentence.",
      skills: ["Java", ".NET", "AWS", "React"],
      teamMembers: [
          { name: "Test 1", image: "https://i.pravatar.cc/50?img=1" },
          { name: "Test 2", image: "https://i.pravatar.cc/50?img=2" },
          { name: "Test 3", image: "https://i.pravatar.cc/50?img=3" },
          { name: "Test 4", image: "https://i.pravatar.cc/50?img=4" },
          { name: "Test 5", image: "https://i.pravatar.cc/50?img=5" },
          { name: "Test 6", image: "https://i.pravatar.cc/50?img=6" },
      ],
      link: "https://www.google.com",
          titleColor: 'brown'
  },
      {
        year: 2023,
        title: "Project Number 2",
        description: "Very brief description of the Project Number 2 in a single sentence.",
        skills: ["Java", "Kafka", "AWS", "React"],
        teamMembers: [
            { name: "Test 3", image: "https://i.pravatar.cc/50?img=1" }, 
            { name: "Test 2", image: "https://i.pravatar.cc/50?img=3" },
            { name: "Test 1", image: "https://i.pravatar.cc/50?img=4" },
        ],
    }
  ];

  const sidebarItems = [
    {
        title: "A global leader in financial services",
        description: "We offer solutions to the world's most important corporations, governments, and institutions.",
        image: "https://via.placeholder.com/250x150.png?text=Training+Image+1"
    },
    {
        title: "Another Event",
        description: "Event description here.",
        image: "https://via.placeholder.com/250x150.png?text=Event+Image+2"
    },
];

    return (
        <div className="app">
            <Navbar />
            <YearNavigation
                years={years}
                selectedYear={selectedYear}
                onYearClick={setSelectedYear}
            />
            <div className="content">
                <QuestList quests={quests.filter(q => q.year === selectedYear)} />
                <Sidebar items={sidebarItems} />
            </div>
        </div>
    );
};

export default App;
