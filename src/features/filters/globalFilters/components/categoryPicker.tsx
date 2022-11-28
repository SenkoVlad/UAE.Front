import { useCallback, useContext, useEffect, useState } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { filtersApi } from "../../filters.api";
import { Category, FiltersState } from "../../filters.models";
import { FiltersContext } from "../../filters.context";
import { ConnectedOverlayScrollHandler } from "primereact/utils";

interface CategoryPickerInputProps {
    onCategoryPicked: (_?: string) => void
}

export const CategoryPickerInput: React.FC<CategoryPickerInputProps> = ({ onCategoryPicked }) => {
    const [selectedCategory, selectCategory] = useState('');
    const [categories, addCategories] = useState<Category[]>();

    useEffect(() => {
        onCategoryPicked(selectedCategory);
    }, [selectedCategory]);

    return <CategoryPickerBase selectCategory={selectCategory} selectedCategory={selectedCategory} categories={categories} addCategories={addCategories} />
}

export const CategoryPickerFilter: React.FC = () => {
    const { selectedCategory, selectCategory, categories, addCategories } = useContext<FiltersState>(FiltersContext);
    return <CategoryPickerBase selectCategory={selectCategory} selectedCategory={selectedCategory} categories={categories} addCategories={addCategories} />
}


export const CategoryPickerBase: React.FC<any> = ({ selectedCategory, selectCategory, categories, addCategories }) => {
    const [isLoading, setIsLoading] = useState(false);

    //const [categories, addCategories] = useState<Category[]>();

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
            id="category-picker"
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