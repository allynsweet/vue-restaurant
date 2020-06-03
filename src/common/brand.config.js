// Brand name to appear throughout page
export const BRAND_NAME = 'BRAND NAME';

// Tag line to appear below logo, if not necessary leave blank
export const BRAND_SHORT_DESC = 'SHORT TAG LINE';

// Long text to explain story, policies, locations, type of food, etc.
export const BRAND_DESC =
  'About 1 paragraph explaining what the restaurant is about, where it is, policy, story, etc';

// Logo that will appear on top of page, images that are wider than they are tall work best.
//    Add logo image to /src/assets and change name here.
export const BRAND_LOGO = require('@/assets/logo.png');

// Color of the Call, Directions, and View Menu buttons
export const BRAND_COLOR = '#dd6806';

// Images that will be shown in the gallery, add images to /src/assets/ folder and change names below.
export const FOOD_IMGS = [
  require('@/assets/1.jpeg'),
  require('@/assets/2.jpeg'),
  require('@/assets/3.jpeg'),
  require('@/assets/4.jpeg'),
  require('@/assets/5.jpeg'),
  require('@/assets/6.jpeg'),
];

//  Remove any social properties that are not applicable. Add your social media links to the `url` property
export const BRAND_SOCIAL = [
  { icon: 'mdi-facebook', url: '' },
  { icon: 'mdi-instagram', url: '' },
  { icon: 'mdi-youtube', url: '' },
  { icon: 'mdi-twitter', url: '' },
];

// The business phone number
export const PHONE_NUMBER = '(123) 123-1234';

// Business location City, State
export const CITY_STATE = 'Hartford, CT';

// Business location street address
export const BUSINESS_ADDRESS = '1400 Park Street';

// The address from Google Maps, on mobile this will open the Google Maps app,
//     on desktop it will open Google Maps in a new tab.
//     After the 'query=' parameter, enter the business address with + instead of spaces.

export const GOOGLE_ADDRESS =
  'https://www.google.com/maps/search/?api=1&query=1400+Park+Street+Hartford+CT+06106';

// Place the menu PDF in the /public/assets/ folder and change the name below.
//    This will open the page to display the menu.
export const MENU_PATH = '/assets/menu.pdf';

// Each element will be displayed on a separate line
export const HOURS = [
  'Monday: CLOSED',
  'Tuesday-Saturday: 9am - 8pm',
  'Sunday: 10am - 6pm',
];

export default {
  BRAND_NAME,
  BRAND_SHORT_DESC,
  BRAND_DESC,
  BRAND_LOGO,
  BRAND_COLOR,
  FOOD_IMGS,
  BRAND_SOCIAL,
  PHONE_NUMBER,
  BUSINESS_ADDRESS,
  CITY_STATE,
  GOOGLE_ADDRESS,
  MENU_PATH,
  HOURS,
};
