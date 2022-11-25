import { useContext, useEffect, useState } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { filtersApi } from "../../filters.api";
import { FiltersState } from "../../filters.models";
import { FiltersContext } from "../../filters.context";

export const CategoryPicker: React.FC = () => {
    const { categories, selectedCategory, selectCategory, addCategories } = useContext<FiltersState>(FiltersContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)

        const fetchData = async () => {
            try {
                const data = await filtersApi.getCategories();
                addCategories(data);
                console.log(data);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData()

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TreeSelect
            value={selectedCategory}
            options={categories}
            onChange={(e) => selectCategory(e.value)}
            panelHeaderTemplate={<></>}
            panelFooterTemplate={<></>}
            emptyMessage={isLoading ? "... loading" : "something went wrong"}
            placeholder="Select Category"
        />
    );
}