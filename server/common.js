// configure oAuth service
ServiceConfiguration.configurations.upsert(
    { service: "google" },
    { $set: { clientId: "527262061053-dpfgtbpd8km9nim3m9ugmie5e38scaip.apps.googleusercontent.com", secret: "3VGS24vASH3-MkxXClzrkPRd" } }
);

Meteor.startup(function () {
    AccountsEntry.config({
        waitEmailVerification: false,   // will not allow users to login until their email is verified.
    });
});

// publish the posts
Meteor.publish('posts', function(){
    return posts.find({}, {sort:{createdAt:-1}});
});

// publish the user profile images
Meteor.publish('ProfileImages', function () {
    return ProfileImages.find();
});

Meteor.publish('UserImages', function () {
    return UserImages.find();
});