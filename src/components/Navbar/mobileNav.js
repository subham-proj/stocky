import React from 'react';
import { Icon,IconButton,Drawer,Button,Navbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import '../../App.css';


class TopNav extends React.Component {
    constructor() {
      super();
      this.state = {
        show: false
      };
      this.close = this.close.bind(this);
      this.toggleDrawer = this.toggleDrawer.bind(this);
      
    }

    close() {
        this.setState({
          show: false
        });
      }

    toggleDrawer() {
    this.setState({ show: true });
    }

    render() {
      const { show } = this.state;

      return (
        <div >
        <Navbar className="nav-toggle">
            <Navbar.Header style={{padding:"20px",paddingTop:"5px"}}>
                <IconButton onClick={() => this.toggleDrawer('left')} icon={<Icon icon="align-justify" size="5x"/>} size="lg" />
            </Navbar.Header>
        </Navbar>
            <Drawer
            size="xs"
            placement="left"
            show={show}
            onHide={this.close}
            style={{width:300}}
            >
            <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                Hello World
            </Drawer.Body>
            <Drawer.Footer>
                <Button onClick={this.close} appearance="primary">
                Confirm
                </Button>
                <Button onClick={this.close} appearance="subtle">
                Cancel
                </Button>
            </Drawer.Footer>
            </Drawer>
        </div>
      );
    }
}

export default TopNav;