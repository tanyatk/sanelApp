var app = app || {};
app.CatList = Backbone.Collection.extend({
    model: app.Cat,
    url: '/'
});
