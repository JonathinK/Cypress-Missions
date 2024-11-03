import React, {useState} from 'react';
import { ContentContainer, MediaContainer } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Lightbox } from './lightbox';
import styled from 'styled-components';
//___
export const ImageSlider = ({ content }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(content.length / imagesPerPage);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle pagination
  const goToNextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const goToPreviousPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  // Handle modal open/close
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Images for the current page
const currentImages = content.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);
  
  return(
    <ProjectGalleryContainer className="image_grid_gallery">
      {/* Grid Gallery */}
      <ProjectGallery>
         {currentImages.map((image) => (
          <ProjectImage
            className="grid_image_container"
            key={image.contentful_id}
            onClick={() => openModal(image)}
          >
            <GatsbyImage
              image={getImage(image)}
              alt={image.description || ''}
              className="grid_image"
            />
          </ProjectImage>
        ))}
      </ProjectGallery> 
             {/* Pagination Controls */}
      <PaginationControls>
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </PaginationControls>
      {/* Lightbox Modal */}
      {isModalOpen && (
        <Lightbox images={content} selectedImage={selectedImage} onClose={closeModal} />
      )}
    </ProjectGalleryContainer>
  )
}

const ProjectGalleryContainer = styled(ContentContainer)`
  grid-row: 2/3;
  grid-column: 3/13;
  display: flex;
  flex-flow: column nowrap;
  justify-content: centered;
  align-items: flex-end; 
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-row: 2/3;
    grid-column: 2/8;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-row: 2/3;
    grid-column: 2/6;
    align-items: center;
  }
`
const ProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
  grid-auto-rows: row;
  gap: 1em;
  width: 100%;
  transition: all .5s ease;

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns: repeat( auto-fit, minmax(224px, 1fr));
    padding: 0em 1em;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    gap: .5em;
    grid-template-columns: repeat( auto-fill, minmax(100px, 1fr));
    padding: 0em;
  }
 
`
const ProjectImage = styled(MediaContainer)`
  aspect-ratio: 2/1.5;
  cursor: pointer;
  border-radius: .5em;
  border: 1px solid ${({theme}) => theme.colors.secondary};

  .grid_image{
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    border-radius: .75em;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    border-radius: .5em;
    max-width: ;
  }
`

const PaginationControls = styled.div`
  margin-top: 2em;
  display: flex;
  flex-flow: row nowrap;
  gap: .5em;

  button{
    padding: 1em 2em;
    border-radius: .5em;
    border: none;
    cursor:pointer;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    justify-content: center;
    align-items: center;
  }
`
