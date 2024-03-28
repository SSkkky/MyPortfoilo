import { Types } from 'mongoose';

export interface State {
    width: number,
    height: number,
    x: number,
    y: number
};

// export interface ListType {
//     [keyName: string]: number | string,
//     imageurl: string
// }


export interface ListType {
    "id": number,
    "name": string,
    "keyword": string,
    "imageurl": string,
    "videourl": string,
    "deployurl": string,
    "dateteam": string,
    "goal": goal[],
    "link": string,
    "overview": string,
    "function": fn[],
    "skill": skill[],
    "review": string,
    "trouble": trouble[]
}


export type goal = {
    "goal": string
}

export type fn = {
    "fn": string
}

export type skill = {
    "name": string,
    "skills": string
}

export type trouble = {
    "id": number,
    "title": string,
    "problem": string,
    "reason": string,
    "solve": string
}

export type guestBookListType = {
    "name": string,
    "message": string,
    "date": string,
    "password": string,
    "_id": Types.ObjectId
}