/**
 * Created by qby on 26.05.15.
 */
if (Orders.find().count() === 0) {
    Orders.insert({
        orderID: "001", companyName: "SuperTrader", customerAdress: "Steindamm 80", orderedItem: "Macbook"
    });
    Orders.insert({
        orderID: "002", companyName: "Cheapskates",  customerAdress: "Reeperbahn 153", orderedItem: "Macbook"
    });
    Orders.insert({
        orderID: "003", companyName: "MegaCorp",     customerAdress: "Steindamm 80",   orderedItem: "Guide to Hamburg"
    });
    Orders.insert({
        orderID: "004", companyName: "SuperTrader",  customerAdress: "Sternstrasse 80",orderedItem: "Cooking  101"
    });
    Orders.insert({
        orderID: "005", companyName: "SuperTrader",  customerAdress: "Steindamm 80",   orderedItem: "Inline Skates"
    });
    Orders.insert({
        orderID: "006", companyName: "MegaCorp",     customerAdress: "MC Donalds 10",  orderedItem: "Playstation"
    });
    Orders.insert({
        orderID: "007", companyName: "Cheapskates",  customerAdress: "Lagerstrasse 11",orderedItem: "Flux compensator"
    });
    Orders.insert({
        orderID: "008", companyName: "SuperTrader",  customerAdress: "Reeperbahn 153", orderedItem: "Inline Skates"
    });
}

