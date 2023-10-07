module.exports = (app: any) => {
    const Middleware = require("../Middleware/Validator");
    const Controller = require("../Controller/Controller");
  
    // Insert Product with validation
    app.post("/insert", Middleware.Validate, Controller.insertProduct);
  
    // To display list of products
    app.get("/display", Controller.listProduct);
  
    // To get product profit
    app.get("/display_profit", Controller.showProfit);
  
    // To remove product by id
    app.delete("/removeProduct/:id", Controller.removeProduct);
  
    // To remove seller by seller id
    app.delete("/removeSeller/:sellerID", Controller.removeSeller);
  
    // Edit product
    app.put("/removeSeller/:sellerID", Controller.removeSeller);
  
    // To calculate total cost
    app.get("/calculateTotalCost", Controller.calculateTotalCost);
  
    // To count cart items
    app.get("/countCartItems", Controller.countCartItems);
  
    // If any other url passed that's not listed above, will return not found
    app.get("*", Controller.NotFound);
  };
  