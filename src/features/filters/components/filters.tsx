import { Panel } from 'primereact/panel';
import { FiltersProvider } from '../filters.context';
import { GlobalFilters } from "./globalFilters";
import { SpecificFilters } from "./specificFilters";

export const Filters: React.FC = () => {
    return (
        <FiltersProvider>
            <Panel header="Filters" toggleable>
                <GlobalFilters />
                <SpecificFilters />
            </Panel>
        </FiltersProvider>
    );
}

