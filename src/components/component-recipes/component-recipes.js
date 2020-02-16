import M from 'materialize-css';
import './component-recipes.scss';

class Recipes {
  constructor() {
    this.recipesList = [
      {
        title: 'Recipe Item 1',
        content: 'Lorem ipsum dolor sit amet.',
        photo:
          'https://s0.tchkcdn.com/i/13/1/471372_a4b3b617_a57_skumbriya_na_grile_depositphotos_74651683.jpg',
      },
      {
        title: 'Recipe Item 2',
        content: 'Lorem ipsum dolor sit amet.',
        photo:
          'https://s0.tchkcdn.com/i/13/1/471372_a4b3b617_a57_skumbriya_na_grile_depositphotos_74651683.jpg',
      },
      {
        title: 'Recipe Item 3',
        content: 'Lorem ipsum dolor sit amet.',
        photo:
          'https://s0.tchkcdn.com/i/13/1/471372_a4b3b617_a57_skumbriya_na_grile_depositphotos_74651683.jpg',
      },
    ];
  }

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
      <ul class="collapsible popout z-depth-0 guides" style="border: none;">
       ${
         this.recipesList.length
           ? this.recipesList.reduce(
               (acc, item) => acc + this.renderRecipeItem(item),
               '',
             )
           : '<h4 class="center-align">Login to view Recipes</h4>'
       }
      </ul>
    </div>`;
  }

  renderRecipeItem({ title, content, photo }) {
    return `
      <li>
        <div class="collapsible-header grey lighten-4">${title}</div>
        <div class="collapsible-body white">
          <img src="${photo}" class="recipe__image">
        </div>
        <div class="collapsible-body white"><span>${content}</span></div>
      </li>`;
  }

  initCollapsible() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.collapsible');

      M.Collapsible.init(elems);
    });
  }
}

export default Recipes;
