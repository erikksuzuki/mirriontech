import { portfolioImages } from './portfolioImages'
const ImageGallery = ({ orientation }) => {
  return (
    <div>
      <div className="max-w-4xl grid grid-cols-3 gap-4">
        {portfolioImages.map((image, index) => {
          return (
            <div className="relative w-full" key={`sideimage-${index}`}>
              <a href={`#&gid=portfolioImages&pid=image-${image.index}`}>
                <img
                  alt={image.alt}
                  rel="lightbox[roadtrip]"
                  id={`slideid-${image.index}`}
                  src={image.src}
                  className="cursor-pointer w-full opacity-100 hover:opacity-80 transition-all"
                  style={{
                    transitionProperty: 'all',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDuration: '400ms',
                  }}
                />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
