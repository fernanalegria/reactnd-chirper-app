import PropTypes from 'prop-types';

const { shape, string, number, bool } = PropTypes;

export default shape({
  name: string.isRequired,
  id: string.isRequired,
  timestamp: number.isRequired,
  text: string.isRequired,
  avatar: string.isRequired,
  likes: number.isRequired,
  replies: number.isRequired,
  hasLiked: bool.isRequired,
  parent: shape({
    id: string.isRequired,
    author: string.isRequired
  })
});
