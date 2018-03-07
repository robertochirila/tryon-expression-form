/**
 * Created by vladas on 25/02/17.
 */
/*Forms = new Mongo.Collection('forms');*/
// Files = new Mongo.Collection('files');
import {jquery} from 'meteor/jquery';
import {FilesCollection} from 'meteor/ostrio:files';


if (Meteor.isClient) {
    Template.Unique.events({
        /*'submit form': function (e) {
            e.preventDefault();

            form = {
                fname: $(e.target).find('[name=first_name]').val(),
                lname: $(e.target).find('[name=last_name]').val(),
                expressionname: $(e.target).find('[name=user-name]').val(),
                email: $(e.target).find('[name=email]').val(),
                country: $(e.target).find('[name=country]').val(),
                influencetyp: $(e.target).find('[name=influence]').val(),
                //good example of what has to be done with multiple dropdowns.
                describe: $(e.target).find('[multiple=value]').val(),
                //External Influences starts here
                brand1: $(e.target).find('[name=brand-0]').val(),
                comment1: $(e.target).find('[name=rows2]').val(),
                //Brand 2 and comment 2
                brand2: $(e.target).find('[name=brand-1]').val(),
                comment2: $(e.target).find('[name=rows3]').val(),
                //Brand 3 and comment 3
                brand3: $(e.target).find('[name=brand-2]').val(),
                comment3: $(e.target).find('[name=rows4]').val(),

                //Influencers data
                influencer1: $(e.target).find('[name="frand-0"]').val(),
                influencercom1: $(e.target).find('[name=influencer1]').val(),
                //Second influencer
                influencer2: $(e.target).find('[name="frand-1"]').val(),
                influencercom2: $(e.target).find('[name=influencer2]').val(),

                influencer3: $(e.target).find('[name="frand-2"]').val(),
                influencercom3: $(e.target).find('[name=influencer3]').val(),

                //END OF INFLUENCERS DATA
                //ABOUT YOURSELF
                aboutyourself: $(e.target).find('[name=aboutyourselfmusic]').val(),
                aboutyourself2: $(e.target).find('[name=aboutyourselffilms]').val(),

                //START OF THE IMAGES
                favoritewardrobe: $(e.target).find('[name=favoritewardrobe]').val(),
                /*
                 EXPECTED TO PUT IMAGE UPLOAD IN THIS STATEMENT
                 */

                /*restofthelife: $(e.target).find('[name=restofthelife]').val(),
                /*
                 EXPECTED TO PUT IMAGE UPLOAD IN THIS STATEMENT
                 */


                //  Build 3 all-time favourite outfits based on occasion.


                /*build3alltime1: $(e.target).find('[name=build3alltime-1]').val(),
                /*
                 EXPECTED TO PUT IMAGE UPLOAD IN THIS STATEMENT
                 */

                //build3alltime2: $(e.target).find('[name=build3alltime-2]').val(),
                /*
                 EXPECTED TO PUT IMAGE UPLOAD IN THIS STATEMENT
                 */

                //build3alltime3: $(e.target).find('[name=build3alltime-3]').val(),
                /*
                 EXPECTED TO PUT IMAGE UPLOAD IN THIS STATEMENT
                 */


                //Start of the last part of the form, called message


                //betheinspiration: $(e.target).find('[name=betheinspiration]').val(),
                //leteverybodyknow: $(e.target).find('[name=leteverybodyknow]').val(),
                /*
                 EXPECTED TO PUT IMAGE UPLOAD IN THIS STATEMENT
                 */


                //SOCIAL MEDIA sector!
                //NETWORKS
                /*ffacebook: $(e.target).find('[name=ffacebook]').val(),
                fvk: $(e.target).find('[name=fvk]').val(),
                ftwitter: $(e.target).find('[name=ftwitter]').val(),
                flinkedin: $(e.target).find('[name=flinkedin]').val(),
                fqq: $(e.target).find('[name=fqq]').val(),
                //CREATIVE
                fsnapchat: $(e.target).find('[name=fsnapchat]').val(),
                fpinterest: $(e.target).find('[name=fpinterest]').val(),
                finstagram: $(e.target).find('[name=finstagram]').val(),
                ftumblr: $(e.target).find('[name=ftumblr]').val(),
                fflickr: $(e.target).find('[name=fflickr]').val(),
                //MUSIC
                fsoundcloud: $(e.target).find('[name=fsoundcloud]').val(),
                fspotify: $(e.target).find('[name=fspotify]').val(),
                //VIDEO
                fyoutube: $(e.target).find('[name=fyoutube]').val(),
                fvimeo: $(e.target).find('[name=fvimeo]').val()
                //This is used for uploading a file

            };
            form._id = Forms.insert(form);*/
            //start of the tag
            //end ot the tag
        //}
    });
}
