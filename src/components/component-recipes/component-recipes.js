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
        const ingredientsArr = ingredients.split('\n');
        const descriptionArr = description.split('\n');

        const recipeItemHTMLElement = `
        <li>
          <div class="collapsible-header yellow lighten-2">
            <h6>${title}</h6>
          </div>
          <div class="collapsible-body white image-box">
            <img src="${image}" class="recipe__image">
          </div>
          <div class="collapsible-body white">
            <div class="recipes-content">
              <div class="ingredients">
                <h4 class="ingredients__title title">Ingredients</h4>
                <ul class="ingredients__list">
                  ${ingredientsArr
                    .map(elem => {
                      return `
                  <li>&#9866; ${elem}</li>
                  `;
                    })
                    .join('\n')}
                </ul>
              </div>
              <div class="method">
                <h4 class="method__title title">Method</h4>
                <ul class="method__list">
                  ${descriptionArr
                    .map((elem, index) => {
                      return `
                  <li>${index + 1}. ${elem}</li>
                  `;
                    })
                    .join('\n')}
                </ul>
              </div>
            </div>
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
