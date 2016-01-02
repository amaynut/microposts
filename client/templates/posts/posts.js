if (Meteor.isClient) {
    Template.posts.helpers({
        posts: function () {
            return posts.find({}, {sort: {createdAt: -1}});
        }
    });
    Template.posts.events({
        "submit #postForm": function(){
            $('#postModal').modal('hide');
        }
    });
    Meteor.subscribe('posts')
}