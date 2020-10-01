import { WorkMember } from './workmember.interface';

export interface PageInfo {
    title: string;
    email: string;
    short_name: string;
    author_page: string;
    facebook: string;
    twitter: string;
    instagram: string;
    tumblr: string;
    workteam: Array<WorkMember>;
}