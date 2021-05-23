import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ gallery, alt, onClick }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map((img) => (
        <ImageGalleryItem key={img.id} img={img} alt={alt} onClick={onClick} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default ImageGallery;
