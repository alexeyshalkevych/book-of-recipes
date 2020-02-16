import './component-form-style.scss';

class Form {
  constructor() {}

  init(container) {
    this.addToScreen(container, 'beforeend', this.renderAdminForm());
  }

  addToScreen(container, position, element) {
    container.insertAdjacentHTML(position, element);
  }

  renderAdminForm() {
    return `
    <form class="center-align admin-actions container" style="margin: 40px auto; max-width: 300px">
      <div class="input-field">
        <input  type="email" id="admin-email" placeholder="User email" required />
      </div>
      <button class="btn-small red darken-1 z-depth-0">Make admin</button>
    </form>`;
  }
}

export default Form;