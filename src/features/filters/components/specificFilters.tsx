import { useContext, useState } from "react";

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