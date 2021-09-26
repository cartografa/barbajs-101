import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

// global hook
barba.hooks.before((data) => {

    const background = data.current.container.dataset.background;
    body.style.setProperty('--page-background', background);

})

// init Barba
barba.init({
    // config
    transitions: [
        {
            name: 'home',
            sync: true,
            once() {},
            leave() {},
            enter() {}
        }, 
        {
            name: 'fade',
            to: {
                namespace: ['fade']
            },
            leave() {},
            enter() {},
        }, 
        {
            name: 'clip',
            // enter-leave at the same time:
            sync: true,
            to: {
                namespace: ['clip']
            },
            leave() {},
            enter() {},
            beforeEnter() {
                console.log('beforeEnter')
            }
        },
        {
            name: 'with-cover',
            to: {
                namespace: ['with-cover']
            },
            leave() {},
            enter() {},
            beforeEnter() {
                console.log('beforeEnter')
            }
        }
    ]
});
