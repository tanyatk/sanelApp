var app = app || {};
app.Cat = Backbone.Model.extend({
    defaults: {
        title: 'Название',
        text: 'В этой категории пока нет контента',
        link_to_group: 'http://ya.ru',
        text_selection: 'Текста пока нет'
    }
});
