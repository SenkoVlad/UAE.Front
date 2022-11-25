import { useContext, useState } from "react";

import '../../../styles/announcements/announcement_form.scss';
import { FiltersContext } from "../filters.context";
import { FiltersState } from "../filters.models";

interface OwnProps { }

export const SpecificFilters: React.FC<OwnProps> = () => {

    const { selectedCategory } = useContext<FiltersState>(FiltersContext);

    return (
        <>

        </>
    );
}