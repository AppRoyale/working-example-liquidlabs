/**
 * Created by qby on 26.05.15.
 */
Template.orderCompany.helpers({
    'superTrader': function(){
        return Orders.find({companyName: 'SuperTrader'});
    },
    'cheapskates': function() {
        return Orders.find({companyName: 'Cheapskates'})
    },
    'megaCorp': function(){
        return Orders.find({companyName: 'MegaCorp'})
    }
});

Template.orderAdress.onRendered(function(){
    $('#smallModal').modal('show');
});