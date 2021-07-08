export interface IUser {
    uid: number,
    firstname: string;
    lastname: string;
    email: string;
}

export interface IQuestion {
    userRef: string;
    topicRef: string;
    title: string;
    followers: string[];
}

export interface IAnswer {
    questinRef: string;
    userRef: string;
    likes: number;
}
