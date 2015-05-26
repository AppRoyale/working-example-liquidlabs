/**
 * Created by qby on 26.05.15.
 */
Template.orderCounter.helpers({
    counterOrderedItems: function() {
        var orders = Orders.find().fetch();
        return _.chain(orders).pluck('orderedItem')
            .countBy()
            .map(function(v, k) { return {orderedItem: k, count: v };})
            .sortBy('count')
            .value()
            .reverse();
    }
});

