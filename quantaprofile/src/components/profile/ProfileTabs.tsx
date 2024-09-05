import { Nav, Tab, Tabs } from "react-bootstrap";
import { StyledNav, StyledTabs } from "../../assets/styles/profile.styles";
import { FilterBtn } from "../../assets/styles/profile.styles";
import { ProfileFilters } from "./ProfileFilters";


export const ProfileTabs = () => {
    return (
      <StyledTabs defaultActiveKey="home" id="profile-tabs" className="mb-3">
        
        <Tab eventKey="home" title="NFT">
            <ProfileFilters />
          <div>
            <h1>NFT</h1>
            <p>This is the content of the Active tab.</p>
          </div>
        </Tab>
        <Tab eventKey="link-1" title="Coins">
            <ProfileFilters />
          <div>
            <h1>Link 1 Content</h1>
            <p>This is the content of the first tab.</p>
          </div>
        </Tab>
        <Tab eventKey="link-2" title="Activity">
        <ProfileFilters />
          <div>
            <h1>Link 2 Content</h1>
            <p>This is the content of the second tab.</p>
          </div>
        </Tab>
        <Tab eventKey="disabled" title="Disabled" disabled>
        <ProfileFilters />
          <div>
            <h1>Disabled Tab Content</h1>
            <p>This tab is disabled and cannot be clicked.</p>
          </div>
        </Tab>
      </StyledTabs>
    );
  };
  