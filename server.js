var app_root = __dirname,
    express = require( 'express' ),
    io = require('socket.io'),
    path = require( 'path' ),
    mongoose = require( 'mongoose' );
    
var app = express();

app.configure( function() {
    app.use( express.bodyParser() );
    app.use( express.methodOverride() );
    app.use( app.router );
    app.use( express.static( path.join(__dirname, 'public') ) );
    app.use( express.errorHandler( {dumpExceptions: true, showStack: true} ) );
});

mongoose.connect( 'mongodb://localhost/site_database', function(){
    console.log( 'Connecction is true' );
});

var CatList = new mongoose.Schema({
    title: String,
    text: String,
    link_to_group: String,
    text_selection: String,
    id_section: String
});

var CatListModel = mongoose.model( 'CatList', CatList );


app.get('/api', function( request, response ){
    return CatListModel.find( function( err, cat_list ) {
        if ( !err ) {
            console.log('Удалось');
            return response.send( cat_list );
        } else {
            console.log('Не удалось');
            return console.log( err + 'ошибка' );
        }
    });
});

app.get('/api/cat_list', function( request, response ){
    return CatListModel.find( function( err, cat_list ) {
        if ( !err ) {
            console.log('Удалось');
            return response.send( cat_list );
        } else {
            console.log('Не удалось');
            return console.log( err + 'ошибка' );
        }
    });
});

app.post('/api/cat_list', function( request, response ){
    var cat_list = new CatListModel({
        title: request.body.title,
        text: request.body.text,
        link_to_group: request.body.link_to_group,
        text_selection: request.body.text_selection,
        id_section: request.body.id_section
    });
    cat_list.save( function( err ) {
        if ( !err ) {
            return console.log( 'created' );
        } else {
            return console.log( err );
        }
    });
    return response.send( cat_list );
});

app.get('/api/cat_list/:id', function( request, response ){
    return CatListModel.findById( request.params.id, function( err, cat ) {
        if( !err ) {
            return response.send( cat );
        } else {
            return console.log( err );
        }
    });
});

var port = 4711;

app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});