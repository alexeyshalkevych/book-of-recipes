import {
  addSignUpListener,
  addLogOutListener,
  addLogInListener,
  authStateChanged,
  createRecipe,
  adminCloud,
} from './auth/auth';

import Navbar from './components/component-navbar/component-navbar';
import Recipes from './components/component-recipes/component-recipes';
import Modals from './components/component-modals/component-modals';
import Form from './components/component-form/component-form';
import './styles/base.scss';

const root = document.querySelector('#root');

const navbar = new Navbar();
const recipes = new Recipes();
const modals = new Modals();
const form = new Form();

navbar.init(root);
form.init(root);
recipes.init(root);
modals.init(root);

export const setupRecipeItem = recipes.setupRecipeItem;
export const setupNavbarUI = navbar.setupNavbarUI;

authStateChanged();
addSignUpListener();
addLogOutListener();
addLogInListener();
createRecipe();
adminCloud();
