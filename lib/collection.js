// profile images collection
ProfileImages = new FS.Collection('ProfileImages', {
    stores: [new FS.Store.GridFS("ProfileImages", {})]
});
UserImages = new Mongo.Collection('UserImages');
posts = new Mongo.Collection('posts');

// attach a schema to the posts collection

posts.attachSchema(new SimpleSchema({
    body: {
        type: String,
        max: 500
    },
    userId: {
        type: String,
        autoValue: function () {
            return Meteor.userId();
        }
    },
    username: {
        type: String,
        autoValue: function () {
            return Meteor.user().username;
        }
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            return new Date()
        }
    }
}));

// set permissions for posts collection
posts.allow({
    insert: function (userId, doc) {
        return true
    }
});

// set permissions for ProfileImages
ProfileImages.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function () {
        return false;
    },
    download: function () {
        return true;
    }
});

UserImages.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function () {
        return false;
    }
});