import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


//Component to display lsit of topics
const TopicList = (props) => {
  
  const parsedTopic = props.topics.map((topic) =>
    <TopicListItem
    key={topic.id}
    label={topic.title}
    />
    )

  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopic}
    </div>
  );
};

export default TopicList;
