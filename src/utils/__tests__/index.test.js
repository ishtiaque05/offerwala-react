import { getImageLink } from 'utils';

import logoImageLink from 'assets/images/jossdeals_logo.png';
import smallLogoImageLink from 'assets/images/jossdeal_logo_small.png';

it('chooses the small logo when breakpoint is xs', () => {
  expect(getImageLink('xs')).toEqual(smallLogoImageLink);
});

it('chooses the big logo when breakpoint is not xs', () => {
  expect(getImageLink('sm')).toEqual(logoImageLink);
});
