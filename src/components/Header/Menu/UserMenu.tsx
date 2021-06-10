import userIcon from '../../../assets/user.svg';

export const UserMenu = () => {
  return (
    <a className="ic-user-menu-toggle" href="#">
      <img src={userIcon} alt="User icon"/>
      <span>User Test</span>
    </a>
  );
};
