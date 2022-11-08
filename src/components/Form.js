import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const {
    handleChangeName,
    getOptionsValues,
    arrayOptions,
    optionsValues,
    acomulateOptions,
    filtersHeaders,
  } = useContext(StarWarsContext);

  const test = acomulateOptions.map((item) => item.column);
  const filtered = filtersHeaders.filter((item) => !test.includes(item));

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="busca por nome"
        onChange={ handleChangeName }
      />
      <select
        name="column"
        onChange={ getOptionsValues }
        data-testid="column-filter"
      >
        { filtered.map((item, index) => (
          <option key={ index }>{item}</option>)) }
      </select>
      <select
        name="condition"
        onChange={ getOptionsValues }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        name="number"
        value={ optionsValues.number }
        onChange={ getOptionsValues }
        data-testid="value-filter"
        type="number"
        placeholder="Inserir quantidade"
      />
      <button
        onClick={ arrayOptions }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Form;
