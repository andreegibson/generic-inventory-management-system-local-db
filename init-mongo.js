db = new Mongo().getDB("admin");
db.auth('admin', 'password');
db.createUser(
    {
        user: "app",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "gims"
            }
        ]
    }
);
db = db.getSiblingDB('gims');
db.createCollection('items');
db.items.insertOne({"name": "Test Name", "category": "Test Category", "type": "Test Type", "brand": "Test Brand", "description": "This is a test description", "imageUrl": null});
db.items.insertOne({"name": "Widget A", "category": "random", "type": "component", "brand": "Acme", "description": "This is a description of Widget A.", "imageUrl": null});
db.items.insertOne({"name": "Widget B", "category": "random", "type": "component", "brand": "Acme", "description": "This is a description of Widget B.", "imageUrl": null});
db.items.insertOne({"name": "Widget C", "category": "random", "type": "component", "brand": "Acme", "description": "This is a description of Widget C.", "imageUrl": null});