import { auth } from './auth-settings';
import { dataBase } from './auth-settings';
import { functions } from './auth-settings';
import { setupRecipeItem, setupNavbarUI } from '../index';
import M from 'materialize-css';

//add admin cloud function
export const adminCloud = () => {
  const adminForm = document.querySelector('.admin-actions');

  adminForm.addEventListener('submit', e => {
    e.preventDefault();

    const adminEmail = document.querySelector('#admin-email').value;
    const addAdminRole = functions.httpsCallable('addAdminRole');

    addAdminRole({ email: adminEmail }).then(result => console.log(result));
  });
};

// auth state
export const authStateChanged = () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dataBase.collection('recipes').onSnapshot(
        snapshot => {
          setupRecipeItem(snapshot.docs);
          setupNavbarUI(user);
        },
        err => {
          console.log(err.message);
        },
      );
    } else {
      setupRecipeItem([]);
      setupNavbarUI();
    }
  });
};

//create Recipe
export const createRecipe = () => {
  const createForm = document.querySelector('#create-form');
  createForm.addEventListener('submit', e => {
    e.preventDefault();

    dataBase
      .collection('recipes')
      .add({
        title: createForm['title'].value,
        image: createForm['image'].value,
        ingredients: createForm['ingredients'].value,
        description: createForm['content'].value,
      })
      .then(() => {
        const modalCreate = document.querySelector('#modal-create');

        M.Modal.getInstance(modalCreate).close();
        createForm.reset();
      })
      .catch(err => {
        M.toast({ html: err.message });
      });
  });
};

// signup
export const addSignUpListener = () => {
  const signUpForm = document.querySelector('#signup-form');

  signUpForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        return dataBase
          .collection('users')
          .doc(cred.user.uid)
          .set({
            bio: signUpForm['signup-bio'].value,
          });
      })
      .then(() => {
        const modalSignUp = document.querySelector('#modal-signup');
        M.Modal.getInstance(modalSignUp).close();
        signUpForm.reset();
      })
      .catch(err => {
        M.toast({ html: err.message });
      });
  });
};

// signout
export const addLogOutListener = () => {
  const logOut = document.querySelector('#logout');

  logOut.addEventListener('click', e => {
    e.preventDefault();

    auth.signOut();
  });
};

// login
export const addLogInListener = () => {
  const logInForm = document.querySelector('#login-form');

  logInForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = logInForm['login-email'].value;
    const password = logInForm['login-password'].value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(cred => {
        const modalLogIn = document.querySelector('#modal-login');
        M.Modal.getInstance(modalLogIn).close();
        logInForm.reset();
      })
      .catch(err => {
        M.toast({ html: err.message });
      });
  });
};
