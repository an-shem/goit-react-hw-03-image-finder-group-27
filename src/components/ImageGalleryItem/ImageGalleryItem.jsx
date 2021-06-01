import PropTypes from 'prop-types';

const ImageGalleryItem = ({ img, alt, onClick }) => {
  const { webformatURL, largeImageURL } = img;

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={(e)=>onClick(e,largeImageURL)}
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
}

export default ImageGalleryItem;
