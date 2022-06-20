import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image';
import {Gallery,GalleryItem,Button,LightBoxModal,LightBoxContent,Controls,LeftRight} from '../Elements/lightBoxElements';

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
    const { images } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <Fragment>
        <Gallery>
          {images.map((img, i) => (
            <GalleryItem key={images.node.sizes.src}>
              <a href={img.node.sizes.src} alt="Car Image" onClick={e => this.handleClick(e, i)}>
                <GatsbyImage sizes={images.node.sizes} />
              </a>
            </GalleryItem>
          ))}
        </Gallery>

        <LightBoxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>
          <LightBoxContent>
            <GatsbyImage image={images[selectedImage].node.sizes}/>
            <Controls>
              <Button onClick={this.closeModal}>Close</Button>
              <LeftRight>
                <Button onClick={this.goBack} disabled={selectedImage === 0}>
                  Previous
                </Button>
                <Button onClick={this.goForward} disabled={selectedImage === images.length - 1}>
                  Next
                </Button>
              </LeftRight>
            </Controls>
          </LightBoxContent>
        </LightBoxModal>
      </Fragment>
    )
  }
}


export default Lightbox