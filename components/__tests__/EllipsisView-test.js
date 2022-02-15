import * as React from 'react';
import renderer from 'react-test-renderer';

import { EllipsisView } from '../EllipsisView';

it(`Ellipsis View renders correctly`, () => {
  const tree = renderer.create(<EllipsisView>Snapshot test!</EllipsisView>).toJSON();

  expect(tree).toMatchSnapshot();
});
