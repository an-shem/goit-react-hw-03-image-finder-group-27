import PropTypes from 'prop-types';
const WrappLoader = ({ children }) => {
  return <div className="WrappLoader">{children}</div>;
};

WrappLoader.propTypes = {
  children: PropTypes.node,
};
export default WrappLoader;
