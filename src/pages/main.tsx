import { Filters } from "../features/filters/components/filters";
import { AnnouncementsList } from "../features/announcement/components/announcementsList";

export default function MainPage() {
    return (
        <>
            <Filters />
            <AnnouncementsList />
        </>
    );
}