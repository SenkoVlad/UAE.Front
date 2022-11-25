import { TreeSelectSelectionKeys } from "primereact/treeselect";



export interface CategoryResponse {
    category: Category;
    filters: Filter[];
}

export interface Filter {
    id: number;
    title: string;
    type: string;
    queryParam: string;
}

export interface Category {
    key: string;
    label: string;
    icon: string;
    selectable: boolean;
    children: Category[];
}

export interface FiltersData {
    categories: Category[];
    selectedCategory?: TreeSelectSelectionKeys;
    searchText?: string;
}

export interface FiltersState extends FiltersData {
    addCategories: (_: Category[]) => void;
    selectCategory: (_: TreeSelectSelectionKeys) => void;
    setSearchText: (_: string) => void;
}