import { Header } from "../features/filters/components/filters";
import { AnnouncementsList } from "../features/announcement/components/announcementsList";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components";
import { AnnouncementForm } from "../features/announcement/components/announcement.form";
import { Profile } from "./user";

export default function MainPage() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<AnnouncementsList />} />
                <Route path="/new" element={<AnnouncementForm />} />
                <Route path='profile/*' element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>}
                />
            </Routes>
        </>
    );
}