/**
 * Created by qby on 26.05.15.
 */
Template.orderGarbage.events({
    "click .delete": function () {
        Orders.remove(this._id);
    }
});

Template.orderGarbage.helpers({
    orders: function () {
        return Orders.find({});
    }
});