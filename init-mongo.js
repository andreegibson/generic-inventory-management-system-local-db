db = new Mongo().getDB("admin");
db.auth("admin", "password");
db.createUser({
  user: "app",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "gims",
    },
  ],
});
db = db.getSiblingDB("gims");

//////////////////////////////////////////////////////////
// Categories
//////////////////////////////////////////////////////////
db.createCollection("categories");
db.categories.insertOne({ _id: NumberInt(1), name: "Electronics" });
db.categories.insertOne({ _id: NumberInt(2), name: "Plumbing" });
db.categories.insertOne({ _id: NumberInt(3), name: "HVAC" });

//////////////////////////////////////////////////////////
// Types
//////////////////////////////////////////////////////////
db.createCollection("types");
db.types.insertOne({ _id: NumberInt(1), name: "Work in Progress", consumable: "false" });
db.types.insertOne({ _id: NumberInt(2), name: "Finished Goods", consumable: "false" });
db.types.insertOne({ _id: NumberInt(3), name: "Component", consumable: "false" });
db.types.insertOne({ _id: NumberInt(4), name: "Raw Materials", consumable: "false" });
db.types.insertOne({ _id: NumberInt(5), name: "Packing and Packaging", consumable: "true" });
db.types.insertOne({ _id: NumberInt(6), name: "Cycle Inventory", consumable: "true" });
db.types.insertOne({ _id: NumberInt(7), name: "Excess Inventory (Obsolete)", consumable: "false"});
db.types.insertOne({ _id: NumberInt(8), name: "Transit (Incoming Inventory)", consumable: "false"});

//////////////////////////////////////////////////////////
// Inventory
//////////////////////////////////////////////////////////
db.createCollection("items");
db.items.insertOne({
  name: "Test Name",
  category: 1,
  type: 2,
  brand: "Test Brand",
  description: "This is a test description",
  imageUrl: null,
});
db.items.insertOne({
  name: "Widget A",
  category: 2,
  type: 3,
  brand: "Acme",
  description: "This is a description of Widget A.",
  imageUrl: null,
});
db.items.insertOne({
  name: "Widget B",
  category: 2,
  type: 3,
  brand: "Acme",
  description: "This is a description of Widget B.",
  imageUrl: null,
});
db.items.insertOne({
  name: "Widget C",
  category: 2,
  type: 3,
  brand: "Acme",
  description: "This is a description of Widget C.",
  imageUrl: null,
});
