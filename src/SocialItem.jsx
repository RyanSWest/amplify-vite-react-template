import React from 'react'
import './index.css';
const SocialItem = ({ platform, url }) => (
  <div className="soc-item">
    <a href={url}>
      <span className={`mbr-iconfont socicon socicon-${platform}`}></span>
    </a>
  </div>
);
export default SocialItem