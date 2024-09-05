import { BlinkingDot, FilterBtn, StyledBlikingText, StyledDropdown, StyledInputGroup } from "../../assets/styles/profile.styles";
import Search from '../../assets/img/search 01.svg';
import Filter from '../../assets/img/filter.svg';

import GridIcon from '../../assets/img/list view-rectangle.svg';
import ListIcon from '../../assets/img/list view-rectangle.svg';

import { Col, Container, Dropdown, Form, InputGroup, Row, Stack } from "react-bootstrap";


export const ProfileFilters = () => {


    return (
        <Row>
            <Col>
                <Stack direction="horizontal">
                    <div>
                        <FilterBtn> <img src={Filter} /> Filter </FilterBtn>
                    </div>

                    <Stack direction="horizontal">
                        <BlinkingDot>•</BlinkingDot>
                        <StyledBlikingText>Active</StyledBlikingText>
                    </Stack>
                </Stack>
            </Col>
            <Col>
                <Stack style={{justifyContent: 'space-between'}} direction="horizontal">
                    <Form>
                        <StyledInputGroup>
                            <InputGroup.Text>
                                <img height={24} width={24} src={Search} alt="search icon" />
                            </InputGroup.Text>
                            <Form.Control
                                type="search"
                                placeholder="Search ID or information"
                                aria-label="Search ID or information"
                                width={300}
                            />
                        </StyledInputGroup>
                    </Form>

                    <StyledDropdown data-bs-theme="dark">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            Price low to hight
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </StyledDropdown>

                    <StyledDropdown data-bs-theme="dark">
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </StyledDropdown>
                </Stack>

            </Col>

        </Row>
    );
}