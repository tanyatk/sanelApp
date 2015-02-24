var app = app || {};
app.CatView = Backbone.View.extend({
    tagName: 'div',
    className: 'container',
    template: _.template( $( '#catTemplate' ).html() ),
    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    }
});
