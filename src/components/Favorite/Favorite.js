import { ReactComponent as HeartFill } from './../../assets/heart-fill.svg';
import { ReactComponent as HeartStroke } from './../../assets/heart-stroke.svg';

function Favorite(props) {
  const isFavorited = props.isFavorite;

  if (isFavorited) {
    return <HeartFill className='heart' onClick={props.onFavoriteClick}/>;
  }

  return <HeartStroke className='heart' onClick={props.onFavoriteClick}/>
}

export default Favorite;