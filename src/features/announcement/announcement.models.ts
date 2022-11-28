import { User } from "../auth/auth.models";
import { Category } from "../filters/filters.models";

export interface CreateAnnouncementRequest {
    name: string;
    category: string;
}

export interface Announcement {
    id: number;
    name: string;
    description: string;
    title: string;
    category: Category;
    createdDateTime: Date;
    parameters: Map<string, string>;
    user: User;
    addressToTake: string;
    address: string;
}

export interface PagedRequest {
    pageNumber: number;
    pageSize: number;
    sortedBy: string;
}

export interface SearchAnnouncementModel extends PagedRequest {
    description: string;
    categoryId: string;
}

export interface AnnouncementsData {
    announcements: Announcement[];
}

export interface AnnouncementsState extends AnnouncementsData {
    add: (value: Announcement) => void;
    reset: () => void,
}