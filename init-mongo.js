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
db.categories.insertOne({ _id: "Electronics" });
db.categories.insertOne({ _id: "Plumbing" });
db.categories.insertOne({ _id: "HVAC" });

//////////////////////////////////////////////////////////
// Types
//////////////////////////////////////////////////////////
db.createCollection("types");
db.types.insertOne({ _id: "Work in Progress", consumable: "false" });
db.types.insertOne({ _id: "Finished Goods", consumable: "false" });
db.types.insertOne({ _id: "Component", consumable: "false" });
db.types.insertOne({ _id: "Raw Materials", consumable: "false" });
db.types.insertOne({ _id: "Packing and Packaging", consumable: "true" });
db.types.insertOne({ _id: "Cycle Inventory", consumable: "true" });
db.types.insertOne({ _id: "Excess Inventory (Obsolete)", consumable: "false"});
db.types.insertOne({ _id: "Transit (Incoming Inventory)", consumable: "false"});

//////////////////////////////////////////////////////////
// Inventory
//////////////////////////////////////////////////////////
db.createCollection("items");
db.items.insertOne({
  name: "Test Name",
  category: "Electronics",
  type: "Finished Goods",
  brand: "Test Brand",
  description: "This is a test description",
  imageUrl: null,
});
db.items.insertOne({
  name: "Widget A",
  category: "Plumbing",
  type: "Component",
  brand: "Acme",
  description: "This is a description of Widget A.",
  imageUrl: null,
});
db.items.insertOne({
  name: "Widget B",
  category: "Plumbing",
  type: "Component",
  brand: "Acme",
  description: "This is a description of Widget B.",
  imageUrl: null,
});
db.items.insertOne({
  name: "Widget C",
  category: "Plumbing",
  type: "Component",
  brand: "Acme",
  description: "This is a description of Widget C.",
  imageUrl: null,
});

//////////////////////////////////////////////////////////
// Work Orders
//////////////////////////////////////////////////////////
db.createCollection("workOrders");


//////////////////////////////////////////////////////////
// Purchase Orders
//////////////////////////////////////////////////////////
db.createCollection("purchaseOrders");