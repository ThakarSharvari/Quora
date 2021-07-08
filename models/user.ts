interface IUser {
    uid: number,
    firstname: string;
    lastname: string;
    email: string;
}

interface IQuestion {
    userRef: string;
    topicRef: string;
    title: string;
    followers: string[];
}

interface IAnswer {
    questinRef: string;
    userRef: string;
    likes: number;
}

export default IUser;