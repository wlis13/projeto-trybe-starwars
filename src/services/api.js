const StarWarsAPI = async () => {
  const promise = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const response = await promise.json();
  const result = response.results;
  const deletResidents = result.filter((item) => delete item.residents);
  return deletResidents;
};

export default StarWarsAPI;
