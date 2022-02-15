import * as React from 'react';
import renderer from 'react-test-renderer';

import {Balance} from '../Balance';

it(`Balance component renders correctly`, () => {
  const tree = renderer.create(<Balance></Balance>).toJSON();

  expect(tree).toMatchSnapshot();
});
