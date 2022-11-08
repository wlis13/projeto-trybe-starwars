import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilteredByOption() {
  const { acomulateOptions, getFetch } = useContext(StarWarsContext);

  const filterByOptions = () => {
    const columnOption = acomulateOptions.map((item) => item.column);
    const conditionOption = acomulateOptions.map((item) => item.condition);
    const numberOption = acomulateOptions.map((item) => item.number);

    if (conditionOption.includes('maior que')) {
      const filteredOption = getFetch
        .filter((item) => item[columnOption[0]] > Number(numberOption[0]));
      return filteredOption;
    }
    if (conditionOption.includes('menor que')) {
      const filteredOption = getFetch
        .filter((item) => item[columnOption[0]] < Number(numberOption[0]));
      return filteredOption;
    }
    if (conditionOption.includes('igual a')) {
      const filteredOption = getFetch
        .filter((item) => item[columnOption[0]] === numberOption[0]);
      return filteredOption;
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
      )) : <p>Vegeta...</p>}
    </table>
  );
}

export default FilteredByOption;
