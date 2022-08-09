import PropTypes from "prop-types";

const Card = ({ image, title, info, className }) => {
  return (
    <div className={className}>
      <img src={image} alt={title} draggable={false} />
      <h2>{title}</h2>
      {info}
    </div>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  className: PropTypes.string,
};
