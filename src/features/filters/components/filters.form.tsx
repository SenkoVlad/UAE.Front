import { useState } from "react";

import '../../../styles/announcements/announcement_form.scss';

interface OwnProps {
    label: string;
    buttonLabel: string;
    onSubmitCallback: (name: string) => void;
}

export const AnnouncementForm: React.FC<OwnProps> = ({
    label,
    buttonLabel,
    onSubmitCallback
}) => {

    const [value, setValue] = useState("");

    return (
        <>
            <label>{label}</label>
            <input className="service-form" onChange={(e) => setValue(e.target.value)} />
            <button onClick={(e) => onSubmitCallback(value)}>{buttonLabel}</button>
        </>
    );
}