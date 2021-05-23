import PropTypes from 'prop-types';

const ImageGalleryItem = ({ img, alt, onClick }) => {
  const { id, webformatURL, largeImageURL } = img;

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        data-url={largeImageURL}
        data-id={id}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
};

export default ImageGalleryItem;
