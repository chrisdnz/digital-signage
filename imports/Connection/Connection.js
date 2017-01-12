conn = DDP.connect("http://localhost:4000/");
Codigos = new Mongo.Collection("Codigos", conn);
