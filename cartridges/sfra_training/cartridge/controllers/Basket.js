"use strict";
var server = require("server");
var BasketMgr = require("dw/order/BasketMgr");
var cache = require("*/cartridge/scripts/middleware/cache");
server.get("Show", function (req, res, next) {
  // var basket = BasketMgr.getCurrentBasket();
  var CartModel = require("*/cartridge/models/cart");
  var basketModel = new CartModel(BasketMgr.getCurrentBasket());

  res.render("basket", basketModel);
  // res.render("basket", { basket: basket });
  // res.json({ basket: basket });
  next();
});

module.exports = server.exports();
