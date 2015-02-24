var app = app || {};
app.CatListView = Backbone.View.extend({
    initialize: function() {
        this.collection = new app.CatList();
        //this.collection.fetch({reset: true})
        this.render();
        //this.listenTo( this.collection, 'add', this.renderCat );
        //this.listenTo( this.collection, 'reset', this.render );
    },
    render: function() {
        this.collection.each( function( item ) {
            console.log(this.collection);
        }, this);
        
    }
});
