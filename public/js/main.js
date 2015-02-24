var AppRouter = Backbone.Router.extend({

    routes: {
        '/'                  : 'home',
        '/:id'         : 'price'
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.b-head').html( this.headerView.el );
        this.footerView = new FooterView();
        $('.l-foot').html( this.footerView.el );
        this.navView = new NavView();
        $('.b-nav').html( this.navView.el );
    },

    home: function ( id ) {
        if ( !this.homeView ) {
            this.homeView = new HomeView();
        }
        $('#content').html(this.homeView.el);
        this.headerView.selectMenuItem('home-menu');
    }

});

utils.loadTemplate(['HeaderView', 'FooterView', 'NavView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});