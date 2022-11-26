import {
    Routes,
    Route,
} from 'react-router-dom';
import UserHome from './home/userHome';
import UserAnnouncements from './announcements/userAnnouncements';

export function Admin() {
    return <Routes>
        <Route path="/" element={<UserHome />}></Route>
        <Route path="announcements" element={<UserAnnouncements />}></Route>
        <Route path="*" element={<UserHome />}></Route>
    </Routes>
}