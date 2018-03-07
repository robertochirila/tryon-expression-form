/**
 * Created by vladas on 26/02/17.
 */

import {jquery} from 'meteor/jquery';


if(Meteor.isClient) {
    Template.Unique.onRendered(function () {
        $('.dropdown').dropdown();

        $("#success").hide();
        $("#submit").click(function () {
            $("#success").slideDown("slow");
            $('html, body').animate({
                scrollTop: $("#success-top").offset().top
            }, 500);
        });

        $('.ui.modal')
            .modal('attach events', '#terms', 'show')
            .modal('attach events', '.terms-close', 'hide')
        ;


    });










}







// Template.s3tester.events({
//
// })
//
// Template.s3tester.helpers({
//     "files": function(){
//         return S3.collection.find();
//     }
// })
