export interface Tweet extends TweetBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'tweet'
    _blocktweet: boolean
}

export type TweetBody = {
    text:string
    username:string
    profilepic:string
    image:string
}

export type CommentBody = {
    comment:string
    username:string
    profilepic:string
    tweetId:string
}

export interface Comment extends TweetBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'comment'
    tweet: {
        _ref: string
        _type: 'reference'
    }
}