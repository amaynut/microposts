Template.profile.events({
    "submit #form_edit_profile": function () {
        var imageFile = $('#profile_image').get(0).files[0];

        if(imageFile){
            // get the image as an FS object
            var fsFile = new FS.File(imageFile);
            // put it the mongodb
            ProfileImages.insert(fsFile, function(err, result){
                if(err){
                    throw new Meteor.Error(err);
                }else{
                    console.log(result)
                    var imageLoc = 'cfs/files/ProfileImages/'+ result._id;

                    UserImages.insert({
                        userId: Meteor.userId(),
                        username: Meteor.user().username,
                        image: imageLoc
                    });
                    // redirect to the home page
                    Router.go('/')
                }
            });
        }
        console.log(imageFile);
        return false;
    }
});