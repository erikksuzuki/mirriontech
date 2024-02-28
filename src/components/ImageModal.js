import { Gallery, Item } from 'react-photoswipe-gallery'
import { portfolioImages } from './portfolioImages'
import 'photoswipe/dist/photoswipe.css'

const ImageModal = ({ page }) => {
  const options = {
    arrowPrev: true,
    arrowNext: true,
    zoom: true,
    close: true,
    counter: true,
  }
  return (
    <Gallery withCaption id="portfolioImages" options={options}>
      {portfolioImages.map((image) => {
        return (
          <Item
            caption={image.alt}
            key={`portfolioImages-image-${image.index}`}
            id={`image-${image.index}`}
            original={image.src}
            thumbnail={image.src}
            width="960"
            height="960"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={image.src} alt={image.alt} />
            )}
          </Item>
        )
      })}
    </Gallery>
  )
}

export default ImageModal
