import Navbar from './components/component-navbar/component-navbar';
import Modals from './components/component-modals/component-modals';
import './styles/base.scss';

const root = document.querySelector('#root');

const navbar = new Navbar();
const modals = new Modals();

navbar.init(root);
modals.init(root);
