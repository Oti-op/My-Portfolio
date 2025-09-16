const mobilenav = () => {
    const headerbars = document.querySelector('.header__bars');
const mobilenav = document.querySelector('.mobile_nav');
const mobilelinks = document.querySelectorAll('.mobile_nav_link');
let ismobilenavopen = false;

headerbars.addEventListener('click', () => {
    ismobilenavopen = !ismobilenavopen
    if (ismobilenavopen) {
            mobilenav.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
    } else {
                    mobilenav.style.display = 'none';
    document.body.style.overflowY = 'auto';
    }
});
mobilelinks.forEach(link => {
    link.addEventListener('click', () => {
        ismobilenavopen = false;
        mobilenav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });
});
};

export default mobilenav;
