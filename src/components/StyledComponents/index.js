import styled from 'styled-components';

export const StyledNavigationBar = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.5rem 2.5rem;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: lightgrey;

  a {
    margin-right: 10px
  }
`;

export const PropertyContainer = styled.div`
  margin: 15px;
  position: relative;
  width: 200px;
`;

export const ListingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PropertyBedroomBathLine = styled.div`
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;
`;

export const PropertyPriceLine = styled.div`
  font-weight: bold;
`;

export const PropertyAddressLine = styled.div`
  font-size: 8px
`;

export const PropertyListedDateLine = styled.div`
  font-size: 8px;
  color: grey;
`;

export const PropertyImage = styled.img`
  height: 200px;
  width: 200px;
`;

export const HeartImageContainer = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  color: "red";
  fill: red;
  svg {
    fill: red;
  }
`;