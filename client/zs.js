let uploader = new ReactiveVar();
let imageDetails = new Mongo.Collection('images');
let currentUserId = Meteor.userId();
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';


Tracker.autorun(() => {
    if (!Meteor.userId()) {
        let f1 = setTimeout(function2, 10);

        function function2() {
            console.log("You are not logged in");
            $('#startButton').css('display', 'none');
            $('#accounts--signup').css('display', 'none');
        }
    } else {

        let f1 = setTimeout(function1, 10);

        function function1() {
            $('#signUpButton').css('display', 'none');
            $('#loginButton').css('display', 'none');
            console.log("You are logged in");
            $('#accounts--signup').css('display', 'none');
            $('#accounts--login').css('display', 'none');
        }

    }
});


Template.Unique.helpers({
    returnUser: function () {
        if (currentUserId !== null) {
            console.log(currentUserId);
            return true;
        } else {
            return false;
        }
    }
});


Template.Unique.events({
    'click #terms': function () {
        $(".modal").addClass("is-active");
    },
    'click #closeModal': function () {
        $(".modal").removeClass("is-active");
    },
    'click #mystic': function () {
        console.log('disappear');
        $('#leftPhoto').addClass('leftPhotoDisappear');
        let f1 = setTimeout(myFunction, 1000);
        let f2 = setTimeout(myFunction2, 1500);

        function myFunction() {
            $('#leftPhoto').css('background-image', "url('/pictures/mystic.jpg')");
            $('#leftPhoto').addClass('leftPhotoAppear');
        }

        function myFunction2() {
            $('#leftPhoto').removeClass('leftPhotoAppear');
            $('#leftPhoto').removeClass('leftPhotoDisappear');
        }
    },
    'click #bold': function () {
        console.log('disappear');
        $('#leftPhoto').addClass('leftPhotoDisappear');
        let f1 = setTimeout(myFunction, 1000);
        let f2 = setTimeout(myFunction2, 1500);

        function myFunction() {
            $('#leftPhoto').css('background-image', "url('/pictures/bold.jpg')");
            $('#leftPhoto').addClass('leftPhotoAppear');
        }

        function myFunction2() {
            $('#leftPhoto').removeClass('leftPhotoAppear');
            $('#leftPhoto').removeClass('leftPhotoDisappear');
        }

    },
    'click #honest': function () {
        console.log('disappear');
        $('#leftPhoto').toggleClass('leftPhotoDisappear');
        let f1 = setTimeout(myFunction, 1000);
        let f2 = setTimeout(myFunction2, 1500);

        function myFunction() {
            $('#leftPhoto').css('background-image', "url('/pictures/honest.jpg')");
            $('#leftPhoto').addClass('leftPhotoAppear');
        }

        function myFunction2() {
            $('#leftPhoto').removeClass('leftPhotoAppear');
            $('#leftPhoto').removeClass('leftPhotoDisappear');
        }
    },
    'click #loginButton': function () {
        $('#column--overlay').addClass('overlay');
        //$('#accounts--login').addClass('overlay');
        $('#myButtons').addClass('overlay');
        let f1 = setTimeout(myFunction, 500);
        let f2 = setTimeout(myFunction2, 500);

        function myFunction() {
            $('#column--overlay').css('display', 'none');
        }

        function myFunction2() {
            $('#accounts--login').addClass('appear').css('display', 'block');
            $('#signUpButton').css('display', 'none');
            $('#startButton').css('display', 'none');
        }
    },
    'click #signUpButton': function () {
        console.log('sign up button clicked');
        $('#column--overlay').addClass('overlay');
        $('#accounts--login').addClass('overlay');
        $('#myButtons').addClass('overlay');
        let f1 = setTimeout(myFunction, 500);
        let f2 = setTimeout(myFunction2, 500);

        function myFunction() {
            $('#column--overlay').css('display', 'none');
        }

        function myFunction2() {
            $('#accounts--login').addClass('disappear');
            $('#accounts--signup').addClass('appear').css('display', 'block');
            $('#signUpButton').css('display', 'none');
            $('#startButton').css('display', 'none');
        }


    },
    'click #startButton': function () {
        if (Meteor.userId()) {
            $('#accounts').css('display', 'inline');
        } else {
            console.log('You are not logged in!');
        }


    },
    'submit .account--form--signup': function (event) {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        let repeatPassword = event.target.repeatPassword.value;
        console.log(password);
        console.log(email);
        if (password.length > 5 && password === repeatPassword) {
            Accounts.createUser({email, password}, (err) => {
                console.log("Create Account attempt!");
                console.log(err);
            });
        } else {
            console.log('Passoword should contain more than 5 characters.');
        }
        let f1 = setTimeout(myFunc, 200);
        let f2 = setTimeout(myFunc1, 500);

        function myFunc() {
            $('#accounts--signup').addClass('disappear');
        }

        function myFunc1() {
            $('#column--overlay').removeClass('overlay').addClass('afterOverlay').css('display', 'block');
            $('#myButtons').removeClass('overlay').addClass('afterOverlay');
            $('#signUpButton').css('display', 'none');
            $('#startButton').css('display', 'inline');
        }


    },
    'submit .accounts--login--form': function (event) {
        event.preventDefault();
        let email = event.target.emailLogin.value.trim();
        let password = event.target.passwordLogin.value.trim();
        console.log(email);
        console.log(password);
        Meteor.loginWithPassword({email}, password, (err) => {
            console.log("Login attempt!");
            if (err) {
                console.log(err);
            } else {
                console.log("login was successfull");
                $('#accounts--login').addClass('disappear');
            }
        });
        let f1 = setTimeout(myFunc, 200);
        let f2 = setTimeout(myFunc1, 500);

        function myFunc() {
            $('#accounts--login').addClass('disappear');
        }

        function myFunc1() {
            $('#column--overlay').removeClass('overlay').addClass('afterOverlay').css('display', 'block');
            $('#myButtons').removeClass('overlay').addClass('afterOverlay');
            $('#signUpButton').css('display', 'none');
            $('#loginButton').css('display', 'none');
            $('#startButton').css('display', 'inline');
        }
    },
    'submit .first--form': function (event) {
        const userInfo = [];
        event.preventDefault();
        let text1 = event.target.firstTextArea.value.trim();
        let text2 = event.target.secondTextArea.value.trim();
        let text3 = event.target.thirdTextArea.value.trim();
        let text4 = event.target.forthTextArea.value.trim();
        userInfo.push(text1, text2, text3, text4);
        // Meteor call for first db insertion
        console.log('first--form submit');
        console.log(text1, text2, text3, text4);
        Meteor.call('insert.form', userInfo);
    },
    'submit .second--form': function (event) {
        const userInfo = [];
        event.preventDefault();
        let name = event.target.name.value.trim();
        let community = event.target.community.value.trim();
        let brand = event.target.brand.value.trim();
        let country = $('#countrySelect').val();
        let engageText = event.target.engageText.value.trim();
        let socialChannel = event.target.socialChannel.value.trim();
        let brandAmbassador = event.target.brandAmbassador.value.trim();
        let helpText = event.target.helpText.value.trim();
        userInfo.push(name, community, brand, country, engageText, socialChannel, brandAmbassador, helpText);
        // Meteor call for update
        console.log('second--form submit');
        console.log(name, community, brand, country, engageText, socialChannel, brandAmbassador, helpText);
        Meteor.call('update.form', userInfo, Meteor.userId());
        Router.go('/success');
    },
    'change .favI': function (event, template) {
        event.preventDefault();
        let upload = new Slingshot.Upload("myImageUploads");
        let timeStamp = Math.floor(Date.now());
        upload.send(document.getElementById("file").files[0], function (error, downloadUrl) {
            uploader.set();

            if (error) {
                console.error('Error uploading');
                alert(error);
            }

            else {
                console.log("Success!");
                console.log('uploaded file available here: ' + downloadUrl);
                imageDetails.insert({
                    imageurl: downloadUrl,
                    time: timeStamp,
                    uploadedBy: currentUserId
                });
            }
        });
        uploader.set(upload);
    }
});


Template.Unique.events({
    'change .oneOutfit': function (event, template) {
        event.preventDefault();

        let upload1 = new Slingshot.Upload("myImageUploads");
        let timeStamp = Math.floor(Date.now());


        upload1.send(document.getElementById('uploadFiles').files[0], function (error, downloadUrl) {
            uploader.set();

            if (error) {
                console.error('Error uploading');
                alert(error);
            }

            else {
                console.log("Success!");
                console.log('uploaded file available here: ' + downloadUrl);
                imageDetails.insert({
                    imageurl: downloadUrl,
                    time: timeStamp,
                    uploadedBy: currentUserId
                });
            }
        });


    }
});


Template.Unique.events({
    'change .casual': function (event, template) {

        event.preventDefault();

        let upload = new Slingshot.Upload("myImageUploads");
        let timeStamp = Math.floor(Date.now());


        upload.send(document.getElementById("casualfile").files[0], function (error, downloadUrl) {
            uploader.set();

            if (error) {
                console.error('Error uploading');
                alert(error);
            }

            else {
                console.log("Success!");
                console.log('uploaded file available here: ' + downloadUrl);
                imageDetails.insert({
                    imageurl: downloadUrl,
                    time: timeStamp,
                    uploadedBy: currentUserId
                });
            }
        });
        uploader.set(upload);


    }
});


Template.Unique.events({
    'change .ellegant': function (event, template) {

        event.preventDefault();

        let upload = new Slingshot.Upload("myImageUploads");
        let timeStamp = Math.floor(Date.now());


        upload.send(document.getElementById("ellegantfile").files[0], function (error, downloadUrl) {
            uploader.set();

            if (error) {
                console.error('Error uploading');
                alert(error);
            }

            else {
                console.log("Success!");
                console.log('uploaded file available here: ' + downloadUrl);
                imageDetails.insert({
                    imageurl: downloadUrl,
                    time: timeStamp,
                    uploadedBy: currentUserId
                });
            }
        });
        uploader.set(upload);


    }
});


Template.Unique.events({
    'change .unique': function (event, template) {

        event.preventDefault();

        let upload = new Slingshot.Upload("myImageUploads");
        let timeStamp = Math.floor(Date.now());


        upload.send(document.getElementById("uniqueFile").files[0], function (error, downloadUrl) {
            uploader.set();

            if (error) {
                console.error('Error uploading');
                alert(error);
            }

            else {
                console.log("Success!");
                console.log('uploaded file available here: ' + downloadUrl);
                imageDetails.insert({
                    imageurl: downloadUrl,
                    time: timeStamp,
                    uploadedBy: currentUserId
                });
            }
        });
        uploader.set(upload);


    }
});


Template.Unique.events({
    'change .describeyou': function (event, template) {

        event.preventDefault();

        let upload = new Slingshot.Upload("myImageUploads");
        let timeStamp = Math.floor(Date.now());


        upload.send(document.getElementById("describeyouFile").files[0], function (error, downloadUrl) {
            uploader.set();

            if (error) {
                console.error('Error uploading');
                alert(error);
            }

            else {
                console.log("Success!");
                console.log('uploaded file available here: ' + downloadUrl);
                imageDetails.insert({
                    imageurl: downloadUrl,
                    time: timeStamp,
                    uploadedBy: currentUserId
                });
            }
        });
        uploader.set(upload);


    }
});


Template.Unique.helpers({

    isUploading: function () {
        return Boolean(uploader.get());
    },

    progress: function () {
        let upload = uploader.get();
        if (upload)
            return Math.round(upload.progress() * 100);
    },

    url: function () {

        return imageDetails.findOne({uploadedBy: currentUserId}, {sort: {time: -1}});

    },

});
