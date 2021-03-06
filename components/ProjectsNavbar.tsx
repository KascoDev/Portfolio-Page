import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="python" {...props} />
      <NavItem value="react & next" {...props} />
      <NavItem value="tableau" {...props} />
      <NavItem value="power BI" {...props} />
      <NavItem value="data viz" {...props} />
      <NavItem value="node & express" {...props} />
      <NavItem value="mongo" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
