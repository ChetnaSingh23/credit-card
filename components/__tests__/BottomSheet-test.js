import * as React from 'react';
import renderer from 'react-test-renderer';

import { CustomBottomSheet } from '../BottomSheet';

it(`renders correctly`, () => {
  const tree = renderer.create(<CustomBottomSheet>Snapshot test!</CustomBottomSheet>).toJSON();

  expect(tree).toMatchSnapshot();
});
