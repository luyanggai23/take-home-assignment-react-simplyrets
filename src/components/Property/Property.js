import { useState } from 'react';
import { 
  PropertyContainer, 
  PropertyBedroomBathLine,
  PropertyPriceLine,
  PropertyAddressLine,
  PropertyListedDateLine,
  PropertyImage
 } from 'components/StyledComponents/index';

 import Favorite from 'components/Favorite/Favorite';
 import { 
  getBedBathroomLine,
  getPhotoUrl,
  getPrice,
  getAddress,
  getListingLine,
  updateMlsIdFavoriteInLocalStorage,
  checkIfMlsIdIsFavorited
 } from './../../utilities/listing-utilities';


function Property({ property }) {
  const localStorageIsFavorite = checkIfMlsIdIsFavorited(property.mlsId);
  const [isFavorite, setIsFavorite] = useState(localStorageIsFavorite);

  const favoriteClicked = () => {
    updateMlsIdFavoriteInLocalStorage(property.mlsId);
    setIsFavorite(!isFavorite);
  }

  return (
    <PropertyContainer>
      <Favorite onFavoriteClick={favoriteClicked} isFavorite={isFavorite}/>
      <PropertyImage src={getPhotoUrl(property)} />
      <PropertyBedroomBathLine>{getBedBathroomLine(property)}</PropertyBedroomBathLine>
      <PropertyPriceLine>{getPrice(property)}</PropertyPriceLine>
      <PropertyAddressLine>{getAddress(property)}</PropertyAddressLine>
      <PropertyListedDateLine>{getListingLine(property)}</PropertyListedDateLine>
    </PropertyContainer>
  )
}

export default Property;