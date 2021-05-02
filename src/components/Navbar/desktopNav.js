import React from 'react';
import {Navbar,Icon,IconButton,Dropdown,Container,Sidenav,Sidebar,Nav,Content} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Cards from '../card';

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };
  
  
  const NavToggle = ({ expand, onChange }) => {
    return (
      <Navbar className="nav-toggle hamburger">
        <Navbar.Header pullRight onClick={onChange} style={{padding:"20px",paddingTop:"5px"}}>
  
                <IconButton className="hamburger-x" icon={<Icon icon="align-justify" size="5x"/>} size="lg" />
                <span className="sitename">StockyIn </span>
        </Navbar.Header>
      </Navbar>
    );
  };
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        expand: true,
        activeKey: '1'

      };
      this.handleToggle = this.handleToggle.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleToggle() {
      this.setState({
        expand: !this.state.expand
      });
    }

    handleSelect(eventKey) {
        this.setState({
          activeKey: eventKey
        });
      }
    
    render() {
      const { expand } = this.state;
      return (
        <div>
          <Container>
            <Sidebar
              style={{ display: 'flex', flexDirection: 'column' }}
              width={expand ? 260 : 56}
              collapsible
            >
              <Sidenav expanded={expand} defaultOpenKeys={['3','4']} className="sidenav" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                <Sidenav.Header>
                  <div style={headerStyles}>
                    <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                    <span style={{ marginLeft: 12,fontSize:"20px",fontWeight:"bold" }}> StockyIn </span>
                  </div>
                </Sidenav.Header>
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                      Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                      User Group
                    </Nav.Item>
                    <Dropdown
                      eventKey="3"
                      trigger="hover"
                      title="Advanced"
                      icon={<Icon icon="magic" />}
                      placement="rightStart"
                    >
                      <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                      <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                      <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
                      <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                      <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
                    </Dropdown>
                    <Dropdown
                      eventKey="4"
                      trigger="hover"
                      title="Settings"
                      icon={<Icon icon="gear-circle" />}
                      placement="rightStart"
                    >
                      <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                      <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
                      <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                      <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                      <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
                    </Dropdown>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
            </Sidebar>
  
            <Container>
                <Navbar className="nav">
                    <Navbar.Header>
                    
                        
                        <NavToggle  expand={expand} onChange={this.handleToggle} />
                    </Navbar.Header>
                </Navbar>
                <Content>
                  <Cards/>
                
                </Content>
            </Container>
          </Container>
        </div>
      );
    }
  }

export default Page;