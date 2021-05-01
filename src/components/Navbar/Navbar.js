import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import '../../App.css';
import {Responsive} from '../../responsive';

import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

function NavBar() {
      return (
        <div>
        
          <Responsive displayIn={["Laptop","Tablet"]}>

            <DesktopNav/>
          </Responsive>

          <Responsive displayIn={["Mobile"]}>
              <MobileNav/>
              
          </Responsive>

        </div>

      );
  }
  export default NavBar;