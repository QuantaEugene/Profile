import { Accordion, Col, Container, Image, ListGroup, Row, Stack } from "react-bootstrap";
import {
  EarningsPersent,
  PrifileAccordionText,
  ProfileDataContainer,
  ProfileLink,
  ProfileNameContainer,
  ProfileStyledRow,
  ProfileTop,
  SotialIconsContainer,
  StyledContextAwareToggle,
  StyledListGroup,
  StyledProfileData,
  AvatarImg,
  ResponsiveStack
} from "../../assets/styles/profile.styles";
import BgImage from "../../assets/img/Rectangle 1056.svg";
import Avatar from '../../assets/img/avatar.svg';
import { ProfileList, SotialsIcons, ProfileData } from "../../const/profile/profileList";
import { ProfileTabs } from "./ProfileTabs";

export const ProfileMainContainer = () => {
  return (
    <Container>
      <ProfileTop>
        <Image fluid src={BgImage} />

        <ProfileStyledRow>
          <Col style={{ position: 'relative' }}>
            <AvatarImg src={Avatar} style={{ top: '-120%', left: '30px' }} />

            <ProfileNameContainer>
              <h4>Pudgy Penguins</h4>
              <label>@pudgypenguins</label>
            </ProfileNameContainer>

            <ResponsiveStack>
              {ProfileData.map((item, index) => (
                <ProfileDataContainer key={index}>
                  <span>
                    Items <StyledProfileData>{item.items}</StyledProfileData>
                  </span>
                  <span>
                    Created on <StyledProfileData>{item.createdOn}</StyledProfileData>
                  </span>
                  <span>
                    Creator Earnings <EarningsPersent>{item.earnings}</EarningsPersent>
                  </span>
                </ProfileDataContainer>
              ))}
            </ResponsiveStack>
          
          </Col>

          <Col>
            <Accordion>
              <PrifileAccordionText>
                Pudgy Penguins is a collection of 8,888 NFT’s, accelerating Web3
                innovation through IP utilization and community empowerment.
                Embodying love, empathy, & compassion, the Pudgy Penguins are a
                beacon of good vibes & po.
                <StyledContextAwareToggle eventKey="1">
                  More...
                </StyledContextAwareToggle>
              </PrifileAccordionText>

              <Accordion.Collapse eventKey="1">
                <>
                  <PrifileAccordionText>
                    ity for everyone. Each holder receives exclusive access to
                    experiences, events, IP licensing opportunities and more.
                    Let’s break through the boundaries of Web3 together.
                    <StyledContextAwareToggle eventKey="1" isBottom>
                      Collapse
                    </StyledContextAwareToggle>
                  </PrifileAccordionText>
                </>
              </Accordion.Collapse>
            </Accordion>
          </Col>
        </ProfileStyledRow>

        <Row>
          <Col xxl={8} lg={10}>
            <StyledListGroup horizontal>
              {ProfileList.map((item, id) => (
                <ListGroup.Item key={id}>
                  <h4>{item.value}</h4>
                  <span>{item.describe}</span>
                </ListGroup.Item>
              ))}
            </StyledListGroup>
          </Col>

          <Col xxl={4} lg={10} className="mb-4">
            <Stack
              direction="horizontal"
              className="justify-content-end align-items-end"
              style={{ height: "100%" }}
            >
              {SotialsIcons.map((item, id) => (
                <SotialIconsContainer key={id} href={item.link}>
                  <img src={item.icon} alt={item.name} />
                </SotialIconsContainer>
              ))}
            </Stack>

            <Stack className="justify-content-end align-items-end">
              <ProfileLink href="https://www.pudgypenguins.com/">
                https://www.pudgypenguins.com/
              </ProfileLink>
            </Stack>
          </Col>
        </Row>
      </ProfileTop>

      <ProfileTabs />
    </Container>
  );
};