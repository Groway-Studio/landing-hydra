import PropTypes from "prop-types";

const ServiceCard = ({ img, title, className, children }) => {
  return (
    <div className={className}>
      <img src={img} alt={title} draggable={false} />
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
