export const ContentCard = ({ 
  showTitle, 
  showText, 
  showTags, 
  showIcon, 
  showButtons,
  tags,
  tagsData 
}) => {
  return (
    <div className="col-12 col-lg-7 card">
      <div className="content-wrapper">
        {showTitle && (
          <h2 className="mbr-section-title mbr-fonts-style">
            <b>
              <span>
                <b>Cryptocurrency</b>
              </span>
              <br />
              Traders
            </b>
          </h2>
        )}
        
        {showText && (
          <p className="mbr-text mbr-fonts-style">
            Cryptocurrency traders occupy a unique and dynamic space in the financial landscape, navigating
            a market that operates 24/7 and thrives on volatility.
          </p>
        )}

        {showTags && (
          <div className="tags-wrapper">
            <div className="tags-wrap">
              {tagsData.slice(0, tags).map((tag, index) => (
                <Tag 
                  key={index}
                  icon={tag.icon}
                  text={tag.text}
                  showIcon={showIcon}
                />
              ))}
            </div>
          </div>
        )}

        {showButtons && (
          <div className="mbr-section-btn">
            <a className="btn btn-primary" href="https://mobiri.se">
              CONTACT NOW
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
