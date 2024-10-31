import React,{useState, useEffect} from 'react';
import styled from "styled-components";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ContentContainer, MediaContainer } from '../styles';
import { disableScroll, enableScroll } from '../utils/noScroll';
//___

export const Lightbox = ({ images, selectedImage, onClose}) => {
  const [currentImage, setCurrentImage] = useState(selectedImage);
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(selectedImage));
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  // Configurable limit for how many thumbnails to display at once
  const thumbnailsToShow = 5;

  // Handle selecting a new image in the lightbox
  const selectImage = (index) => {
    setCurrentIndex(index);
    setCurrentImage(images[index]);
  };

  // Arrow navigation for changing the current image
  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    selectImage(nextIndex);
    updateThumbnailList(nextIndex);
  };
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  }, []);
  const goToPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    selectImage(prevIndex);
    updateThumbnailList(prevIndex);
  };

  // Update thumbnail list to ensure the selected image is visible
  const updateThumbnailList = (newIndex) => {
    if (newIndex >= thumbnailStartIndex + thumbnailsToShow) {
      setThumbnailStartIndex(newIndex - thumbnailsToShow + 1);
    } else if (newIndex < thumbnailStartIndex) {
      setThumbnailStartIndex(newIndex);
    }
  };

  // Determine thumbnails to display
  const visibleThumbnails = images.slice(thumbnailStartIndex, thumbnailStartIndex + thumbnailsToShow);

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {/* Main Image */}
        <ModalImage>
          <GatsbyImage
            image={getImage(currentImage)}
            alt={currentImage.description || ''}
            className="modal_image"
          /> 
        </ModalImage>
      {/*     <ThumbnailList>
            {visibleThumbnails.map((image, index) => {
              const globalIndex = thumbnailStartIndex + index;
              return (
                <ThumbnailItem
                  key={image.contentful_id}
                  onClick={() => selectImage(globalIndex)}
                  className={globalIndex === currentIndex ? 'selected' : ''}
                >
                  <GatsbyImage
                    image={getImage(image)}
                    alt={image.description || ''}
                    className="thumbnail_image"
                    style={{ opacity: globalIndex === currentIndex ? 1 : 0.5 }}
                  />
                </ThumbnailItem>
              );
            })}
          </ThumbnailList>
          <ArrowSelectorContainer>
            <ArrowButton onClick={() => setThumbnailStartIndex(Math.max(thumbnailStartIndex - 1, 0))}>
              &lt;
            </ArrowButton>
            <ArrowButton onClick={() => setThumbnailStartIndex(Math.min(thumbnailStartIndex + 1, images.length - thumbnailsToShow))}>
            &gt;
          </ArrowButton>
          </ArrowSelectorContainer>
          
 */}
        {/* Close Button */}
        <CloseButton onClick={onClose}>×</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
}


const ModalContainer = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalContent = styled.div`
  background: transparent;
  padding: 2em;
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(3em,.6fr) 1fr minmax(3em,.6fr);
  grid-template-rows: 32px 1fr;
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns: minmax(3em,.2fr) 1fr minmax(3em,.2fr);
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns: minmax(1em,.1fr) 1fr minmax(1em,.1fr);
    padding: 1em;
  }
  
`
const ModalImage = styled(MediaContainer)`
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self:center;
  align-self:center;
  width: 100%;
  max-height: 100%;
  @media ${({theme}) => theme.breakpoints.tablet}{
    border-radius: .75em;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    border-radius: .5em;
    grid-column: 1/4;
  }
`

const ThumbnailList = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
  
  display: none;
  justify-content: flex-start;
  align-items: center;
`
const ThumbnailItem = styled(MediaContainer)`
  flex: 1;
  aspect-ratio: 2/1.5;
`
const ArrowSelectorContainer = styled(ContentContainer)`

`
const ArrowButton = styled.div`
  display: none;
`
const CloseButton = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  justify-self: end;
  align-self: center;
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
  color: white;
`