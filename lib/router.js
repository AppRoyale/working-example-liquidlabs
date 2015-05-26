/**
 * Created by qby on 26.05.15.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('gandalph');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {except: '/'});

Router.route('/', function () {
    this.render('index');
});

Router.map(function () {
    this.route('gandalph', {
        path: '/gandalph',
        template: 'layout',
        layoutTemplate: 'dashboard',
        yieldTemplates: {
            'gandalph': {to: 'aside'}
        }
    });
});

Router.map(function () {
    this.route('dashboard', {
        path: '/dashboard',
        template: 'layout',
        layoutTemplate: 'dashboard',
        yieldTemplates: {
            'orderStatic': {to: 'aside'}
        }
    });
});

Router.map(function () {
    this.route('order-company', {
        path: '/order-company',
        template: 'layout',
        layoutTemplate: 'dashboard',
        yieldTemplates: {
            'orderCompany': {to: 'aside'}
        }
    });
});

Router.map(function () {
    this.route('order-adress', {
        path: '/order-adress',
        template: 'layout',
        layoutTemplate: 'dashboard',
        yieldTemplates: {
            'orderAdress': {to: 'aside'}
        }
    });
});

Router.map(function () {
    this.route('order-garbage', {
        path: '/order-garbage',
        template: 'layout',
        layoutTemplate: 'dashboard',
        yieldTemplates: {
            'orderGarbage': {to: 'aside'}
        }
    });
});

Router.map(function () {
    this.route('order-counter', {
        path: '/order-counter',
        template: 'layout',
        layoutTemplate: 'dashboard',
        yieldTemplates: {
            'orderCounter': {to: 'aside'}
        }
    });
});
Router.map(function () {
    this.route('theory-design', {
        path: 'theory-design',
        template: 'layout',
        layoutTemplate: 'dashboard',
        yieldTemplates: {
            'theoryDesign': {to: 'aside'}
        }
    });
});
Router.map(function () {
    this.route('theory-JavaScript', {
        path: 'theory-JavaScript',
        template: 'layout',
        layoutTemplate: 'dashboard',
        yieldTemplates: {
            'theoryJavaScript': {to: 'aside'}
        }
    });
});


