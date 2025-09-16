import '../STYLES/modern-normalize.css';
import '../STYLES/style.css';
import '../STYLES/components/header.css';
import '../STYLES/components/hero.css';
import '../STYLES/components/about.css';
import '../STYLES/components/featured.css';
import '../STYLES/components/projects.css';
import '../STYLES/components/contact.css';
import '../STYLES/components/footer.css';
import '../STYLES/components/mobilenav.css';
import '../STYLES/utils.css';

import mobilenav from './utils/mobilenav.js';
import darkmode from './utils/darkmode.js';
import lazy from './utils/lazy-loading.js';

mobilenav();
darkmode();
lazy();