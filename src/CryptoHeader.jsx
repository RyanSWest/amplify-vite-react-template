import { ContentCard } from "./contentCard";
import { ImageCard } from "./imageCard";
// Main Header Component
import './index.css';
import {ContentCard} from './contentCard';
export const CryptoHeader = ({
  fullWidth = false,
  reverseContent = false,
  showTitle = true,
  showText = false,
  showTags = true,
  showIcon = true,
  showButtons = true,
  showSocial = true,
  tags = 3,
  soc = 6,
  overlayOpacity = 0.7,
  backgroundImage = ''
}) => {
  const tagsData = [
    { icon: 'mobi-mbri-users mobi-mbri', text: 'Different Strategies' },
    { icon: 'mobi-mbri-setting mobi-mbri', text: 'Tools and Levels' },
    { icon: 'mobi-mbri-growing-chart mobi-mbri', text: 'Significant Profits' }
  ];

  const socialPlatforms = [
    { platform: 'instagram', url: 'https://mobiri.se/' },
    { platform: 'telegram', url: 'https://mobiri.se/' },
    { platform: 'discord', url: 'https://mobiri.se/' },
    { platform: 'tiktok', url: 'https://mobiri.se/' },
    { platform: 'linkedin', url: 'https://mobiri.se/' },
    { platform: 'youtube', url: 'https://mobiri.se/' }
  ];

  const containerClass = fullWidth ? 'container-fluid' : 'container';
  const rowClass = reverseContent ? 'row items-wrap flex-row-reverse' : 'row items-wrap';

  return (
    <section className="header01 tradem5">
      <div className="mbr-fallback-image disabled"></div>
      <div 
        className="mbr-overlay" 
        style={{ opacity: overlayOpacity }}
      ></div>

      <div className={containerClass}>
        <div className={rowClass}>
          <ContentCard 
            showTitle={showTitle}
            showText={showText}
            showTags={showTags}
            showIcon={showIcon}
            showButtons={showButtons}
            tags={tags}
            tagsData={tagsData}
          />

          <ImageCard 
            showSocial={showSocial}
            backgroundImage={backgroundImage}
            socialPlatforms={socialPlatforms}
            soc={soc}
          />
        </div>
      </div>
    </section>
  );
};
