import M from 'materialize-css';
import './component-modals-style.scss';

class Modals {
  constructor() {}

  init(container) {
    this.addToScreen(container, 'beforeend', this.renderModals());

    this.initModals();
  }

  initModals() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.modal');
      const options = {
        dismissible: true,
      };
      M.Modal.init(elems, options);
    });
  }

  addToScreen(container, position, element) {
    container.insertAdjacentHTML(position, element);
  }

  renderModals() {
    return `
      ${this.renderAccountModal()}
      ${this.renderCreateRecipeModal()}
      ${this.renderLoginModal()}
      ${this.renderSignUpModal()}`;
  }

  renderSignUpModal() {
    return `
      <div id="modal-signup" class="modal">
        <div class="modal-content">
          <h4>Sign up</h4><br />
          <form id="signup-form">
            <div class="input-field">
              <input type="text" id="signup-username" required />
              <label for="signup-username">User name</label>
            </div>
            <div class="input-field">
              <input type="email" id="signup-email" required />
              <label for="signup-email">Email address</label>
            </div>
            <div class="input-field">
              <input type="password" id="signup-password" required />
              <label for="signup-password">Choose password</label>
            </div>
            <button class="btn red darken-1 z-depth-0">Sign up</button>
            <p class="error pink-text center-align"></p>
          </form>
        </div>
      </div>`;
  }

  renderLoginModal() {
    return `
      <div id="modal-login" class="modal">
        <div class="modal-content">
          <h4>Login</h4><br />
          <form id="login-form">
            <div class="input-field">
              <input type="email" id="login-email" required />
              <label for="login-email">Email address</label>
            </div>
            <div class="input-field">
              <input type="password" id="login-password" required />
              <label for="login-password">Your password</label>
            </div>
            <button class="btn red darken-1 z-depth-0">Login</button>
            <p class="error pink-text center-align"></p>
          </form>
        </div>
      </div>`;
  }

  renderCreateRecipeModal() {
    return `
      <div id="modal-create" class="modal">
        <div class="modal-content">
          <h4>Create Recipe</h4><br />
          <form id="create-form">
            <div class="input-field">
              <input type="text" id="title" required>
              <label for="title">Recipe Title</label>
            </div>
            <div class="input-field">
              <input type="text" id="image" required>
              <label for="image">Recipe Image Link</label>
            </div>
            <div class="input-field">
              <textarea id="ingredients" class="materialize-textarea" required></textarea>
              <label for="ingredients">Recipe Ingredients</label>
            </div>
            <div class="input-field">
              <textarea id="content" class="materialize-textarea" required></textarea>
              <label for="content">Recipe Methods</label>
            </div>
            <button class="btn red darken-1 z-depth-0">Create</button>
          </form>
        </div>
      </div>`;
  }

  renderAccountModal() {
    return `
      <div id="modal-account" class="modal">
        <div class="modal-content center-align">
          <h4>Account details</h4><br />
          <div class="account-details"></div>
        </div>
      </div>`;
  }
}

export default Modals;
