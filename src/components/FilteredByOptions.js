import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilteredByOptions() {
  const { acomulateOptions, getFetch } = useContext(StarWarsContext);

  const filterByOptions = () => {
    const columnOption = acomulateOptions.map((item) => item.column);
    const conditionOption = acomulateOptions.map((item) => item.condition);
    const numberOption = acomulateOptions.map((item) => item.number);

    let filtered;
    let filtered2;
    if (conditionOption.includes('maior que')) {
      filtered = getFetch
        .filter((item) => item[columnOption[0]] > Number(numberOption[0]));
    }
    if (conditionOption.includes('menor que')) {
      filtered2 = filtered
        .filter((item) => item[columnOption[1]] < Number(numberOption[1]));
      if (acomulateOptions[1] && !acomulateOptions[2]) {
        return filtered2;
      }
    }
    if (conditionOption.includes('igual a')) {
      const filtered3 = filtered2
        .filter((item) => item[columnOption[2]] === numberOption[2]);
      if (acomulateOptions[2]) {
        return filtered3;
      }
    }
  };

  return (
    <table>
      {filterByOptions() ? filterByOptions().map((plan, index) => (
        <tr key={ index }>
          <td>{ plan.name }</td>
          <td>{ plan.rotation_period }</td>
          <td>{ plan.orbital_period }</td>
          <td>{ plan.diameter }</td>
          <td>{ plan.climate}</td>
          <td>{ plan.gravity }</td>
          <td>{ plan.terrain}</td>
          <td>{ plan.surface_water }</td>
          <td>{ plan.population }</td>
          <td>{ plan.films }</td>
          <td>{ plan.created }</td>
          <td>{ plan.edited }</td>
          <td>{ plan.url }</td>
        </tr>
      )) : <p>Goku...</p>}
    </table>
  );
}

export default FilteredByOptions;
