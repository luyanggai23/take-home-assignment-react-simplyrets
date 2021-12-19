import get from 'lodash/get'
import { format } from 'date-fns';

const calculateBathrooms = (fullBaths, halfBaths, threeQuarterBaths) => {
  return fullBaths + (.5 * halfBaths) + (.75 * threeQuarterBaths);
}

export const getPhotoUrl = (property) => {
  return property.photos[0];
}

export const getBedBathroomLine = (property) => {
  const bedrooms = get(property, 'property.bedrooms');
  const fullBaths = get(property, 'property.bathsFull');
  const halfBaths = get(property, 'property.bathsHalf');
  const threeQuarterBaths = get(property, 'property.bathsThreeQuarter');
  const bathrooms = calculateBathrooms(fullBaths, halfBaths, threeQuarterBaths);
  const squareFeet = get(property, 'property.area');

  return `${bedrooms} BR | ${bathrooms} Bath | ${squareFeet} Sq Ft`
}
export const getPrice = (property) => {
  const listPrice = get(property, 'listPrice');
  return `$${numberWithCommas(listPrice)}`;
}
export const getAddress = (property) => {
  const streetNumber = get(property, 'address.streetNumber');
  const streetName = get(property, 'address.streetName');
  const city = get(property, 'address.city');
  const state = get(property, 'address.state');
  return `${streetNumber} ${streetName}, ${city}, ${state}`;
}
export const getListingLine = (property) => {
  const listDate = format(new Date(get(property, 'listDate')), 'M/d/yy');
  return `Listed: ${listDate}`;
}

//copied from stackoverflow
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const updateMlsIdFavoriteInLocalStorage = (mlsId) => {
  const favorites = localStorage.getItem('favorites');
  let favoritesMap = JSON.parse(favorites);

  if (favoritesMap) {
    if (favoritesMap[mlsId]) {
      delete favoritesMap[mlsId];
      localStorage.setItem('favorites', JSON.stringify(favoritesMap));
    } else {
      favoritesMap[mlsId] = true;
      localStorage.setItem('favorites', JSON.stringify(favoritesMap));
    }
    
  } else {
    localStorage.setItem('favorites', JSON.stringify({[mlsId]: true}));
  }
}

export const checkIfMlsIdIsFavorited = (mlsId) => {
  const favorites = localStorage.getItem('favorites');
  let favoritesMap = JSON.parse(favorites);

  return favoritesMap[mlsId];
}