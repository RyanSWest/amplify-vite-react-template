import './index.css';
export const ImageCard = ({ 
  showSocial, 
  backgroundImage,
  socialPlatforms,
  soc 
}) => {
  return (
    <div className="col-12 col-lg-4 card">
      <div className="content-wrapper">
        <div className="image-wrapper">
          <img 
            src={backgroundImage || '/placeholder-image.jpg'} 
            alt="Cryptocurrency Trading" 
          />
        </div>
        
        {showSocial && (
          <div className="social-wrapper">
            <div className="social-wrap">
              {socialPlatforms.slice(0, soc).map((social, index) => (
                <SocialItem 
                  key={index}
                  platform={social.platform}
                  url={social.url}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
