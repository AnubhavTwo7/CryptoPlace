import React, { useState } from 'react';
import './Blog.css';

const BlogPost = ({ title, summary, fullText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="blog-post" style={{height: isExpanded ? 'auto' : '300px'}}>
      <h2>{title}</h2>
      <p className="summary">{summary}</p>
      <button className="read-more-btn" onClick={toggleExpand}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      {isExpanded && <div className="expanded-text">{fullText}</div>}
    </div>
  );
};

export default BlogPost;
