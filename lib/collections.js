Forms = new Mongo.Collection('forms');


if (Meteor.isServer) {
    Meteor.methods({
        'insert.form'(userInfo) {
            console.log(userInfo);
            Forms.insert({
                userId: Meteor.userId(),
                text1: userInfo[0],
                text2: userInfo[1],
                text3: userInfo[2],
                text4: userInfo[3],
                name: '',
                community: '',
                brand: '',
                country: '',
                engageText: '',
                socialChannel: '',
                brandAmbassador: '',
                helpText: ''
            });
        },
        'update.form'(userInfo, user) {
            Forms.update({userId: user}, {
                $set:
                    {
                        name: userInfo[0],
                        community: userInfo[1],
                        brand: userInfo[2],
                        country: userInfo[3],
                        engageText: userInfo[4],
                        socialChannel: userInfo[5],
                        brandAmbassador: userInfo[6],
                        helpText: userInfo[7]
                    }
            });
        }
    });
}