export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: "username",
      title: "User Name",
      type: "string",
    },
    {
      name: "profilepic",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "tweet",
      title: "Tweet",
      description:'Refernce the tweet the comment is associated to',
      type: "reference",
      to:{
        type:'tweet'
      }
    },
    
    
  ],
  
}
