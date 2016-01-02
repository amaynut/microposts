Meteor.startup(function () {
    AccountsEntry.config({
        homeRoute: '/',                            // mandatory - path to redirect to after sign-out
        dashboardRoute: '/',
        waitEmailVerification: false, // remove the email verification step
        passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
});

// create a custom template function to get the user profile image
Template.registerHelper('getProfileImage', function(userId){
    var userImage = UserImages.findOne({userId: userId});

    if(userImage && userImage.image){
        return userImage.image;
    }else {
        return 'img/photo.png';
    }

});