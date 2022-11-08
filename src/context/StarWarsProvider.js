import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import StarWarsAPI from '../services/api';

function StarWarsProvider({ children }) {
  const [getFetch, setGetFetch] = useState();
  const [getName, setGetName] = useState('');
  const [isFilterName, getIsFilterName] = useState(false);
  const [optionsValues, setOptionsValues] = useState({
    column: 'population',
    condition: 'maior que',
    number: 0,
  });
  const [acomulateOptions, setAcomulateOptions] = useState([]);
  const [isFilterOption, setIsFilterOption] = useState(false);
  const [filteredByOptions, setFilteredByOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState(false);
  const [filtersHeaders, setFiltersHeaders] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const fetchResults = async () => {
    setIsFilterOption(false);
    const getResult = await StarWarsAPI();
    setGetFetch(getResult);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleChangeName = ({ target }) => {
    getIsFilterName(true);
    setFilteredOptions(false);
    setIsFilterOption(false);
    const { value } = target;
    setGetName(value);
  };

  const getOptionsValues = ({ target }) => {
    const { name, value } = target;
    setOptionsValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const arrayOptions = useCallback(() => {
    getIsFilterName(false);
    console.log(acomulateOptions.length);
    if (acomulateOptions.length === 0) {
      setIsFilterOption(true); setFilteredOptions(false);
    }
    if (acomulateOptions.length > 0) {
      setIsFilterOption(false); setFilteredOptions(true);
    }
    setAcomulateOptions((prevState) => [...prevState, optionsValues]);
  }, [acomulateOptions.length, optionsValues]);

  const handleDelet = useCallback(({ target: { id } }) => {
    const newListFilter = Array.from(acomulateOptions);
    newListFilter.splice(id, 1);
    setAcomulateOptions(newListFilter);
    if (acomulateOptions.length === 0) {
      setIsFilterOption(true);
      setFilteredOptions(false);
    }
    if (acomulateOptions.length > 0) {
      setIsFilterOption(false); setFilteredOptions(true);
    }
    setIsFilterOption(true);
    setFilteredOptions(false);
  }, [acomulateOptions]);

  const contextProvider = useMemo(() => ({
    getFetch,
    setGetFetch,
    handleChangeName,
    getName,
    isFilterName,
    getOptionsValues,
    optionsValues,
    acomulateOptions,
    arrayOptions,
    handleDelet,
    isFilterOption,
    setIsFilterOption,
    filteredByOptions,
    setFilteredByOptions,
    filteredOptions,
    setFilteredOptions,
    filtersHeaders,
    setFiltersHeaders,
    setAcomulateOptions,
  }), [
    getFetch,
    getName,
    isFilterName,
    optionsValues,
    acomulateOptions,
    arrayOptions,
    handleDelet,
    isFilterOption,
    filteredByOptions,
    filteredOptions,
    filtersHeaders,
    setFiltersHeaders,
  ]);

  return (
    <StarWarsContext.Provider value={ contextProvider }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape({}),
}.isRequired;

export default StarWarsProvider;
