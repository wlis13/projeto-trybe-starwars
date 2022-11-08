import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilteredByName from './FilteredByName';
import FilteredByOption from './FilteredByOption';
import FilteredByOptions from './FilteredByOptions';
import Form from './Form';

function Table() {
  const {
    getFetch,
    isFilterName,
    acomulateOptions,
    handleDelet,
    isFilterOption,
    filteredOptions,
    setAcomulateOptions,
    setIsFilterOption,
    setFilteredOptions,
  } = useContext(StarWarsContext);

  const headers = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'URL'];

  const handleDeletEvery = () => {
    setIsFilterOption(false);
    setFilteredOptions(false);
    setAcomulateOptions([]);
  };

  if (acomulateOptions.length <= 0) {
    setIsFilterOption(false);
    setFilteredOptions(false);
  }

  return (
    <div>
      <Form />
      <table>
        <tr>
          { headers.map((header, index) => (
            <th key={ index }>{header}</th>
          ))}
        </tr>
        {acomulateOptions && acomulateOptions.map((item, index) => (
          <div data-testid="filter" key={ index }>
            <p>{ item.column}</p>
            <p>{ item.condition}</p>
            <p>{ item.number}</p>
            <button
              onClick={ handleDelet }
              id={ index }
              type="button"
            >
              Delet
            </button>
          </div>
        ))}
        <button
          data-testid="button-remove-filters"
          onClick={ handleDeletEvery }
          type="button"
        >
          DeletEvery
        </button>
        {getFetch
        && !isFilterOption
        && !filteredOptions
        && !isFilterName
          && getFetch.map((planet, index) => (
            <tr key={ index }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate}</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain}</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}

        {isFilterName
        && <FilteredByName />}

        {isFilterOption
        && !filteredOptions
        && !isFilterName
        && <FilteredByOption />}

        {filteredOptions
        && !isFilterName
        && !isFilterOption
        && <FilteredByOptions /> }
      </table>
    </div>
  );
}

export default Table;
