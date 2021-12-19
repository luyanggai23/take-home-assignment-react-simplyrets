import { getListings } from './../services/listings-service';
import { useQuery } from "react-query";
import Property from './../components/Property/Property';
import { ListingsContainer } from './../components/StyledComponents';

function ListingsPage() {
  const { data, isLoading, error } = useQuery('listings', getListings);

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const listProperties = data.map((property) => 
    <Property property={property} key={property.mlsId}/>
  );

  return (
    <ListingsContainer>
      { listProperties }
    </ListingsContainer>
  )
}

export default ListingsPage;