import React from 'react';
import { ContentContainer, Button } from '../styles';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

export const ShareComponent = ({ title }) => {
  // Define the handleShareClick function to open a new window with the share URL
  const handleShareClick = (platform) => {
    const url = window.location.href;
    let shareUrl;

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${title}&body=${url}`;
        break;
      default:
        shareUrl = url;
    }

    window.open(shareUrl, 'Share', 'width=550,height=400');
  };

  // Return the JSX for the ShareComponent
  return (
    <ContentContainer className="share_component">
      {/* Render a button for each sharing platform */}
      <Button className="icon_share_button" onClick={() => handleShareClick('twitter')}><Icon icon="prime:twitter"/></Button>
      <Button className="icon_share_button" onClick={() => handleShareClick('linkedin')}><Icon icon="mdi:linkedin"/></Button>
      <Button className="icon_share_button" onClick={() => handleShareClick('email')}><Icon icon="ic:round-email"/></Button>
    </ContentContainer>
  );
};

