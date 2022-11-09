import React from 'react';
import { render } from '@testing-library/react';
import StarWarsProvider from '../context/StarWarsProvider';

function renderWithContext(children) {
  return render(
    <StarWarsProvider>
      {children}
    </StarWarsProvider>,
  );
}

export default renderWithContext;
