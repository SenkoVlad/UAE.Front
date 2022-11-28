import { useContext } from "react";

import { AnnouncementsContext } from "../announcement.context";
import { AnnouncementsState } from "../announcement.models";

export const AnnouncementsList: React.FC = () => {

    const { announcements } = useContext<AnnouncementsState>(AnnouncementsContext);

    return (
        <>
            ANNOUNCEMENTS LIST
            <div className="announcements-container">
                <ul className="announcements-list">
                    {announcements.map(x => <li key={x.id} className="announcement">{x.id} : {x.name}</li>)}
                </ul>
            </div>
        </>
    );
}