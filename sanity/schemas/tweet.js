export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in the tweet",
      type: "string",
    },
    {
      name: "blocktweet",
      title: "Block a Tweet",
      description: "toogle if the tweet is inappropiate",
      type: "boolean",
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
      name: "image",
      title: "In Tweet Image",
      type: "string",
    },
  ],
};
