import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';
import testData from '../../cypress/mocks/testData';
import userEvent from '@testing-library/user-event';
import renderWithContext from '../Helpers/RenderWithContext';

describe(('Teste completo'), () => {
  test('Testa se existe os elementos na tela', () => {
    render(<App />);
    const filterColumn = screen.getByTestId(/column-filter/i)
    const filterComparison = screen.getByTestId(/comparison-filter/i)
    const buttonFilter = screen.getByRole('button', {
      name: /filtrar/i
    })
    const textbox = screen.getByRole('textbox')
    const number = screen.getByRole('spinbutton')
    const listFilters = [
      filterColumn,
      filterComparison,
      buttonFilter,
      textbox,
      number,
    ]
    listFilters.forEach((item) => expect(item).toBeInTheDocument())
  });

  test('testa busca por texto', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });

    await act(async () => {
      renderWithContext(<App />);
    });

    const textbox = screen.getByRole('textbox')

    expect(global.fetch).toHaveBeenCalled();

    userEvent.type(textbox, 't');
    const cell = await screen.findByRole('cell', { name: /tatooine/i });

    expect(cell).toBeInTheDocument();
  })

  test('Testa se adiciona filtros', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });

    await act(async () => {
      renderWithContext(<App />);
    });

    const filterColumn = screen.getByTestId('column-filter');
    const filterComparison = screen.getByTestId('comparison-filter');
    const number = screen.getByRole('spinbutton')
    const btnFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(filterColumn, ['population'])
    userEvent.selectOptions(filterComparison, ['maior que'])
    userEvent.type(number, '1000000')
    userEvent.click(btnFilter)

    const setFilter = await screen.findByTestId('filter')
    const removeBtn = await screen.findByRole('button', { name: 'Delet' });
    const removeEvery = screen.getByRole('button', { name: 'DeletEvery' });
    expect(setFilter).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument()

    userEvent.click(removeBtn)

    expect(setFilter).not.toBeInTheDocument();
    expect(removeEvery).toBeInTheDocument();

  })
  test('Testa se adiciona mais de um filtro', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });

    await act(async () => {
      renderWithContext(<App />);
    });

    const filterColumn = screen.getByTestId('column-filter');
    const filterComparison = screen.getByTestId('comparison-filter');
    const number = screen.getByRole('spinbutton')
    const btnFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(filterColumn, ['population'])
    userEvent.selectOptions(filterComparison, ['maior que'])
    userEvent.type(number, '1000000')
    userEvent.click(btnFilter)

    userEvent.selectOptions(filterColumn, ['diameter'])
    userEvent.selectOptions(filterComparison, ['maior que'])
    userEvent.type(number, '9000')
    userEvent.click(btnFilter)

    const falha = screen.getByText(/goku\.\.\./i)
    expect(falha).toBeInTheDocument();
  })
  test('Testa filtro menor que', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });

    await act(async () => {
      renderWithContext(<App />);
    });

    const filterColumn = screen.getByTestId('column-filter');
    const filterComparison = screen.getByTestId('comparison-filter');
    const number = screen.getByRole('spinbutton')
    const btnFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(filterColumn, 'diameter')
    userEvent.selectOptions(filterComparison, 'maior que')
    userEvent.type(number, '9000')
    userEvent.click(btnFilter)

    userEvent.selectOptions(filterColumn, 'population')
    userEvent.selectOptions(filterComparison, 'menor que')
    userEvent.type(number, '1000000')
    userEvent.click(btnFilter)

    const datePlenet = await screen.findByRole('cell', {  name: /tatooine/i});

  })
  test('Testa filtro menor que', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });

    await act(async () => {
      renderWithContext(<App />);
    });

    const filterColumn = screen.getByTestId('column-filter');
    const filterComparison = screen.getByTestId('comparison-filter');
    const number = screen.getByRole('spinbutton')
    const btnFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(filterColumn, 'diameter')
    userEvent.selectOptions(filterComparison, 'maior que')
    userEvent.type(number, '9000')
    userEvent.click(btnFilter)

    userEvent.selectOptions(filterColumn, 'population')
    userEvent.selectOptions(filterComparison, 'menor que')
    userEvent.type(number, '1000000')
    userEvent.click(btnFilter)

    userEvent.selectOptions(filterColumn, 'rotation_period')
    userEvent.selectOptions(filterComparison, 'igual a')
    userEvent.type(number, '23')
    userEvent.click(btnFilter)

  })
  test('Testa filtro menor que', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });

    await act(async () => {
      renderWithContext(<App />);
    });

    const filterColumn = screen.getByTestId('column-filter');
    const filterComparison = screen.getByTestId('comparison-filter');
    const number = screen.getByRole('spinbutton')
    const btnFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(filterColumn, 'population')
    userEvent.selectOptions(filterComparison, 'menor que')
    userEvent.type(number, '1000000')
    userEvent.click(btnFilter)

  })
  test('Testa filtro menor que', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });

    await act(async () => {
      renderWithContext(<App />);
    });

    const filterColumn = screen.getByTestId('column-filter');
    const filterComparison = screen.getByTestId('comparison-filter');
    const number = screen.getByRole('spinbutton')
    const btnFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(filterColumn, 'orbital_period')
    userEvent.selectOptions(filterComparison, 'igual a')
    userEvent.type(number, '23')
    userEvent.click(btnFilter)

  })
})
