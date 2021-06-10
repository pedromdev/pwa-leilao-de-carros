import {Container} from "../Container";
import {Logo} from "../Logo";
import {UserMenu} from "./Menu/UserMenu";
import {Separator} from "./Menu/Separator";
import phoneIcon from '../../assets/phone.svg'

export const Header = () => {
  return (
    <header className="ic-header">
      <Container>
        <aside>
          <Logo/>
          <Separator/>
          <img src={phoneIcon} className="ic-phone-icon" alt="Phone icon"/>
          (11) 3569-3465
        </aside>
        <UserMenu/>
      </Container>
    </header>
  );
};
