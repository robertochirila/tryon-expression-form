import { Meteor } from 'meteor/meteor';



import { check } from 'meteor/check';


if (Meteor.isServer) {
    // S3.config = {
    //     key: 'AKIAIL2SFNE5UT3DLBYA',
    //     secret: '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',
    //     bucket: 'tryonsubmit',
    //     region: 'eu-west-2' // Only needed if not "us-east-1" or "us-standard"
    // };

    // code to run on server at startup

    let imageDetails = new Mongo.Collection('images');


    Slingshot.fileRestrictions("myImageUploads", {
        allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
        maxSize: 10 * 1024 * 1024,
    });

    Slingshot.createDirective("myImageUploads", Slingshot.S3Storage, {
        AWSAccessKeyId: "AKIAIL2SFNE5UT3DLBYA",
        AWSSecretAccessKey: "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",
        bucket: "tryonsubmit",
        acl: "public-read",
        region: "eu-west-2",


        authorize: function () {

            if (!this.userId) {
                return true;

            }

            return true;
        },

        key: function (file) {
            let currentUserId = Meteor.user().emails[0].address;
            return currentUserId + "/" + file.name;
        }

    });
}