/**
 * Created by qby on 26.05.15.
 */
Orders = new Mongo.Collection('orders');
Orders.initEasySearch('customerAdress');