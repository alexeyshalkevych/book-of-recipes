import { auth } from '../../auth/auth-settings';
import { dataBase } from '../../auth/auth-settings';
import M from 'materialize-css';
import './component-recipes.scss';

class Recipes {
  constructor() {}

  init(container) {
    this.addToScreen(container, 'beforeend', this.renderRecipesList());

    this.initCollapsible();
  }

  addToScreen(container, position, element) {
    container.insertAdjacentHTML(position, element);
  }

  renderRecipesList() {
    return `
    <div class="container" style="margin-top: 40px;">
      <ul class="collapsible popout z-depth-0 recipes" style="border: none;">
      </ul>
    </div>`;
  }

  setupRecipeItem(data) {
    const recipesList = document.querySelector('.recipes');

    if (data.length) {
      let items = '';

      data.forEach(doc => {
        const { title, ingredients, description, image } = doc.data();
        const recipeItemHTMLElement = `
        <li>
          <div class="collapsible-header grey lighten-4">
            <h6>${title}</h6>
          </div>
          <div class="collapsible-body white">
            <img src="${image}" class="recipe__image">
          </div>
          <div class="collapsible-body white">
            <strong>Ingredients</strong>
            <p>${ingredients}</p>
          </div>
          <div class="collapsible-body white">
            <span>${description}</span>
          </div>
        </li>`;

        items += recipeItemHTMLElement;
      });

      recipesList.innerHTML = items;
    } else {
      recipesList.innerHTML =
        '<h5 class="center-align">Login to view recipes</h5>';
    }
  }

  initCollapsible() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.collapsible');

      M.Collapsible.init(elems);
    });
  }
}

export default Recipes;
