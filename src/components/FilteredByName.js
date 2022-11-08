import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilteredByName() {
  const { getFetch, getName } = useContext(StarWarsContext);

  const newListByName = () => {
    const newList = getFetch
      .filter((item) => item.name.toLowerCase().includes(getName.toLowerCase()));
    return newList;
  };
  return (
    <table>
      {newListByName().map((plane, index) => (
        <tr key={ index }>
          <td>{ plane.name }</td>
          <td>{ plane.rotation_period }</td>
          <td>{ plane.orbital_period }</td>
          <td>{ plane.diameter }</td>
          <td>{ plane.climate}</td>
          <td>{ plane.gravity }</td>
          <td>{ plane.terrain}</td>
          <td>{ plane.surface_water }</td>
          <td>{ plane.population }</td>
          <td>{ plane.films }</td>
          <td>{ plane.created }</td>
          <td>{ plane.edited }</td>
          <td>{ plane.url }</td>
        </tr>
      ))}
    </table>
  );
}

export default FilteredByName;
