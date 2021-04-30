import React from 'react';
import {Navbar,Icon,IconButton,Dropdown,Container,Footer,Header,Sidenav,Sidebar,Nav,Content} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };
  
  const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: '56px',
    textAlign: 'center'
  };
  
  const NavToggle = ({ expand, onChange }) => {
    return (
      <Navbar className="nav-toggle">
        <Navbar.Header pullRight onClick={onChange} style={{padding:"20px",paddingTop:"5px"}}>
  
                <IconButton icon={<Icon icon="align-justify" size="5x"/>} size="lg" />
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
        <div className="show-fake-browser sidebar-page">
          <Container>
            <Sidebar
              style={{ display: 'flex', flexDirection: 'column' }}
              width={expand ? 260 : 56}
              collapsible
            >
              <Sidenav expanded={expand} defaultOpenKeys={['3','4']} appearance="subtle" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                <Sidenav.Header>
                  <div style={headerStyles}>
                    <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                    <span style={{ marginLeft: 12 }}> BRAND</span>
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
                <Navbar>
                    <Navbar.Header>
                        <NavToggle expand={expand} onChange={this.handleToggle} />

                    </Navbar.Header>
                </Navbar>
                <Content>
                    <div style={{padding:"50px"}}>
                        <h1>Hello World</h1>
                    </div>
                </Content>
            </Container>
          </Container>
        </div>
      );
    }
  }

export default Page;