import logoImageLink from '../assets/images/jossdeals_logo.png';
import smallLogoImageLink from '../assets/images/jossdeal_logo_small.png';

export const getImageLink = width =>
  width !== 'xs' ? logoImageLink : smallLogoImageLink;
