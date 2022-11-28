import { apiUrl, basicRequestSettings, } from '../../utils/consts';
import { Announcement, CreateAnnouncementRequest } from './announcement.models';

export const announcementApi = {
    create,
    get,
    getPaged,
};

async function create(data: CreateAnnouncementRequest): Promise<Announcement> {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        ...basicRequestSettings
    };

    const response = await fetch(`${apiUrl}/announcement/`, requestOptions);

    const text = await response.text();
    const announcement = text && JSON.parse(text);

    return announcement;
}

async function get(id: string): Promise<Announcement> {
    const requestOptions = {
        method: 'GET',
        ...basicRequestSettings
    };

    const response = await fetch(`${apiUrl}/announcement/${id}`, requestOptions)

    const text = await response.text();
    const announcements = text && JSON.parse(text);

    return announcements;
}

async function getPaged(id: string): Promise<Announcement> {
    const requestOptions = {
        method: 'GET',
        ...basicRequestSettings
    };

    const response = await fetch(`${apiUrl}/announcement/all`, requestOptions)

    const text = await response.text();
    const announcements = text && JSON.parse(text);

    return announcements;
}
