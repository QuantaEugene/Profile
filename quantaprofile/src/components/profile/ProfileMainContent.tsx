import { Container } from "react-bootstrap";
import { ProfileTop } from "../../assets/styles/profile.styles";
import BgImage from '../../assets/img/Rectangle 1056.svg';

import { ProfileTabs } from "./ProfileTabs";

export const ProfileMainContainer = () => {

    return (
        <Container>
            <ProfileTop>
                <img src={BgImage} />
                Text
            </ProfileTop>

            <ProfileTabs />
        </Container>
    );
}