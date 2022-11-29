import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel';
import { FiltersProvider } from '../filters.context';
import { GlobalFilters } from "./globalFilters";
import { SpecificFilters } from "./specificFilters";
import { Ripple } from 'primereact/ripple';
import './styles/header.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';


interface OwnProps {
    titleElement: string;
    collapsed?: boolean;
    onTogglerClick?: any;
    togglerClassName?: any
}

export const NavBar: React.FC<OwnProps | PanelHeaderTemplateOptions> = ({ titleElement, collapsed, onTogglerClick, togglerClassName }) => {

    const navigate = useNavigate();

    const toggleIcon = collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
    const collapsible = collapsed !== undefined;

    return <div id='header'>
        <div className='header-title'>
            <img src={logo} onClick={() => navigate("/")} />
            <div className='header-title-text'>{titleElement}</div>
        </div>

        <div className={`header-toggler ${collapsible ? '' : 'disabled'}`} onClick={onTogglerClick}>
            {!collapsible ? <></> :
                <div className={togglerClassName}>
                    <span className={toggleIcon}></span>
                    <Ripple />
                </div>
            }
        </div>
        <div className='header-additional-content'>
            <div onClick={() => navigate("/profile")}>
                <span className='pi pi-user'></span>
            </div>
            <div onClick={() => navigate("/new")}>
                <span className='pi pi-plus'></span>
            </div>
        </div>
    </div >
    // options.className: Style class of the default header element.
    // options.titleClassName: Style class of the title element.
    // options.iconsClassName: Style class of the icons wrapper element.
    // options.togglerClassName: Style class of the toggler element.
    // options.togglerIconClassName: Style class of the toggler icon element.
    // options.onTogglerClick: Click event for the toggler element.
    // options.titleElement: Default title element created by the component.
    // options.iconsElement: Default icons wrapper element created by the component.
    // options.togglerElement: Default toggler element created by the component.
    // options.element: Default element created by the component.
    // options.props: component props.
    // options.collapsed: Whether the panel is collapsed.
}

export const Header: React.FC = () => {

    return (
        <Routes>
            <Route path="/new" element={<NavBar titleElement='Create new announcement' />} />
            <Route path="/profile" element={<NavBar titleElement='My profile' />} />
            <Route path="*" element={
                <Panel header="Filters" toggleable headerTemplate={NavBar} title='Filters'>
                    <div id='filters'>
                        <FiltersProvider>
                            <GlobalFilters />
                            <SpecificFilters />
                        </FiltersProvider>
                    </div>
                </Panel>}
            />
        </Routes>
    );
}

