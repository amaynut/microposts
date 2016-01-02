if(Meteor.isClient){
    Template.posts.helpers({
        profile_image: function(){
           return 'img/photo.png'
        },
        profiles: function(){
            return _.range(10)
        }
    });
}