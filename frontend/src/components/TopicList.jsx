import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


//Component to display list of topics
const TopicList = ({ topics, handleTopicClick }) => {

  const parsedTopics = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      label={topic.title}
      onClick={() => handleTopicClick(topic.id)} // Add onClick event handler
    />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopics}
    </div>
  );
};

export default TopicList;
