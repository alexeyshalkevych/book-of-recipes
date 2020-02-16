import { dataBase } from '../../auth/auth-settings';
import recipesLogo from '../../assets/images/recipes-logo.svg';
import './component-navbar-style.scss';

class Navbar {
  constructor() {}

  init(container) {
    this.addToScreen(container, 'beforeend', this.renderNavbar());
  }

  addToScreen(container, position, element) {
    container.insertAdjacentHTML(position, element);
  }

  renderNavbar() {
    return `
      <nav class="z-depth-0 grey lighten-4">
        <div class="nav-wrapper container">
          <a href="#" class="brand-logo">
            <img src="${recipesLogo}">
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li class="logged-in" style="display: none;">
              <a href="#" class="grey-text modal-trigger" data-target="modal-account">Account</a>
            </li>
            <li class="logged-in" style="display: none;">
              <a href="#" class="grey-text" id="logout">Logout</a>
            </li>
            <li class="logged-in" style="display: none;">
              <a href="#" class="grey-text modal-trigger" data-target="modal-create">Create Recipes</a>
            </li>
            <li class="logged-out" style="display: none;">
              <a href="#" class="grey-text modal-trigger" data-target="modal-login">Login</a>
            </li>
            <li class="logged-out" style="display: none;">
              <a href="#" class="grey-text modal-trigger" data-target="modal-signup">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>`;
  }

  setupNavbarUI(user) {
    const loggedInLinks = document.querySelectorAll('.logged-in');
    const loggedOutLinks = document.querySelectorAll('.logged-out');
    const accauntDetails = document.querySelector('.account-details');

    if (user) {
      dataBase
        .collection('users')
        .doc(user.uid)
        .get()
        .then(doc => {
          const accauntDescription = `
          <p>Logged in as <strong>${user.email}</strong></p>
          <p>${doc.data().bio}</p>
          `;
          accauntDetails.innerHTML = accauntDescription;
        });

      loggedInLinks.forEach(item => (item.style.display = 'block'));
      loggedOutLinks.forEach(item => (item.style.display = 'none'));
    } else {
      accauntDetails.innerHTML = '';

      loggedInLinks.forEach(item => (item.style.display = 'none'));
      loggedOutLinks.forEach(item => (item.style.display = 'block'));
    }
  }
}

export default Navbar;
