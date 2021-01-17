import React from "react"
import PropTypes from "prop-types"

function Image({ image, desktopImage, styles, alt }) {
  return (
    <picture>
      {desktopImage && (
        <>
          <source media="(min-width: 480px)" srcSet={desktopImage.srcSet} />
          <source
            media="(min-width: 480px)"
            srcSet={desktopImage.srcSetWebp}
            type="image/webp"
          />
        </>
      )}
      <source srcSet={image.srcWebp} type="image/webp" />
      <img
        src={image.src}
        srcSet={image.srcSet}
        alt="Homepage"
        loading="lazy"
        alt={alt}
      />
    </picture>
  )
}

const imageShape = PropTypes.shape({
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  srcWebp: PropTypes.string,
  srcSetWebp: PropTypes.string,
})

Image.propTypes = {
  image: imageShape.isRequired,
  desktopImage: imageShape,
}
