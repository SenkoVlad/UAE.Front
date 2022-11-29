import { CategoryPickerFilter } from "../globalFilters/components/categoryPicker";
import { TextSearch } from "../globalFilters/components/textSearch";

export const GlobalFilters: React.FC = () => {
    return (
        <>
            <TextSearch />
            <CategoryPickerFilter />
        </>
    );
}