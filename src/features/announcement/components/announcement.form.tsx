import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import { CategoryPickerInput } from "../../filters/globalFilters/components/categoryPicker";

import './styles/announcement.form.scss';
import { announcementApi } from "../announcements.api";
import { Category } from "../../filters/filters.models";

interface OwnProps {
}

export const AnnouncementForm: React.FC<OwnProps> = ({
}) => {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {

    }

    const onSubmit = async () => {
        setIsLoading(true)

        try {
            const data = await announcementApi.create({ name, category });
            console.log(data);
        } finally {
            setIsLoading(false);
        }
    };

    const onCategoryPicked = (category?: string) => {
        console.log(name, category)w
        category && setCategory(category);
    };

    return (
        <>
            <div id="announcement-form">
                <span className="p-float-label">
                    <InputText id="in" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="in">Name</label>
                </span>
                <span className="p-float-label">
                    <CategoryPickerInput onCategoryPicked={onCategoryPicked} />
                    <label htmlFor="category-picker">Category</label>
                </span>

                <Button label="Submit" loading={isLoading} loadingIcon="pi pi-spin pi-sun" onClick={onSubmit} />
            </div>
        </>
    );
}