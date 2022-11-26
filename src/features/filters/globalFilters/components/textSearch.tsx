import { useContext } from "react";
import { InputText } from "primereact/inputtext";
import { FiltersContext } from "../../filters.context";
import { FiltersState } from "../../filters.models";

export const TextSearch: React.FC = () => {

    const { searchText: search, setSearchText: setSearch } = useContext<FiltersState>(FiltersContext);

    return (
        <InputText value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
    );
}