import React from "react";

import "../styles/TopicListItem.scss";

//Component to display topic item
const TopicListItem = ({ label, onClick }) => {

  return (
    <div className="topic-list__item" onClick={onClick}>
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
