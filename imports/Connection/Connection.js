conn = DDP.connect("https://unitec-anuncios.herokuapp.com/");
Codigos = new Mongo.Collection("Codigos", conn);
Ad = new Mongo.Collection('ads',conn);
