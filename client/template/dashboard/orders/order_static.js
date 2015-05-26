/**
 * Created by qby on 26.05.15.
 */
Template.orderStatic.onRendered(function(){
    Session.setDefault('shop', [
        {orderID: "001", companyName: "SuperTrader",  customerAdress: "Steindamm 80",   orderedItem: "Macbook"},
        {orderID: "002", companyName: "Cheapskates",  customerAdress: "Reeperbahn 153", orderedItem: "Macbook"},
        {orderID: "003", companyName: "MegaCorp",     customerAdress: "Steindamm 80",   orderedItem: "Guide to Hamburg"},
        {orderID: "004", companyName: "SuperTrader",  customerAdress: "Sternstrasse 80",orderedItem: "Cooking  101"},
        {orderID: "005", companyName: "SuperTrader",  customerAdress: "Steindamm 80",   orderedItem: "Inline Skates"},
        {orderID: "006", companyName: "MegaCorp",     customerAdress: "MC Donalds 10",  orderedItem: "Playstation"},
        {orderID: "007", companyName: "Cheapskates",  customerAdress: "Lagerstrasse 11",orderedItem: "Flux compensator"},
        {orderID: "008", companyName: "SuperTrader",  customerAdress: "Reeperbahn 153", orderedItem: "Inline Skates"}
    ]);
});

Template.orderStatic.helpers({
    shop: function(){
        return Session.get('shop');
    }
});