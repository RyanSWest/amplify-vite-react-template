import  React from 'react'
import './index.css';
const Tag = ({ icon, text, showIcon }) => (
  <div className="tag-wrap">
    {showIcon && (
      <div className="icon-wrapper">
        <span className={`mbr-iconfont ${icon}`}></span>
      </div>
    )}
    <p className="mbr-tag mbr-fonts-style">
      {text}
    </p>
  </div>
);
export default Tag