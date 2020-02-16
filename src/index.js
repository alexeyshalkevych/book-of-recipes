import {
  addSignUpListener,
  addLogOutListener,
  addLogInListener,
  authStateChanged,
  createRecipe,
} from './auth/auth';

import Navbar from './components/component-navbar/component-navbar';
import Recipes from './components/component-recipes/component-recipes';
import Modals from './components/component-modals/component-modals';
import './styles/base.scss';

const body = document.querySelector('body');
const root = document.querySelector('#root');

const navbar = new Navbar();
const recipes = new Recipes();
const modals = new Modals();

body.classList.add('green', 'lighten-2');

navbar.init(root);
recipes.init(root);
modals.init(root);

export const setupRecipeItem = recipes.setupRecipeItem;
export const setupNavbarUI = navbar.setupNavbarUI;

authStateChanged();
addSignUpListener();
addLogOutListener();
addLogInListener();
createRecipe();
