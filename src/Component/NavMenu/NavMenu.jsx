import checkPropTypes from "prop-types";

const NavMenu = ({ Data }) => {
  const { path, name } = Data;
  return (
    <li className="mr-6 border-b-2 hover:bg-slate-500 p-5">
      <a href={path}>{name}</a>
    </li>
  );
};

NavMenu.propTypes = {
  Data: checkPropTypes.object.isRequired,
};

export default NavMenu;
