import React, { useState } from "react";
import {
  BlinkingDot,
  FilterBtn,
  FilterDiv,
  FilterIcon,
  FilterSwitch,
  StyledBlikingText,
  StyledDropdown,
  StyledInputGroup,
} from "../../assets/styles/profile.styles";
import Search from "../../assets/img/search 01.svg";
import Filter from "../../assets/img/filter.svg";

import GridIcon from "../../assets/img/grid 02.svg";
import ListIcon from "../../assets/img/list view-rectangle.svg";

import { Col, Dropdown, Form, InputGroup, Row, Stack } from "react-bootstrap";

export const ProfileFilters = () => {
  const [isGridView, setIsGridView] = useState(true);

  const toggleGridView = () => {
    if (!isGridView) setIsGridView(true);
  };

  const toggleListView = () => {
    if (isGridView) setIsGridView(false);
  };

  return (
    <Row>
      <Col>
        <Stack direction="horizontal">
          <div>
            <FilterBtn>
              <img src={Filter} /> Filter
            </FilterBtn>
          </div>

          <Stack direction="horizontal">
            <BlinkingDot>•</BlinkingDot>
            <StyledBlikingText>Active</StyledBlikingText>
          </Stack>
        </Stack>
      </Col>

      <Col>
        <Stack
          style={{ justifyContent: "space-between" }}
          direction="horizontal"
        >
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

          
          <div>
            
          </div>
          <StyledDropdown className="mx-3" data-bs-theme="dark">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Price low to high
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Another action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Something else
               </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                Separated link
               </Dropdown.Item>
            </Dropdown.Menu>
          </StyledDropdown>

          <FilterSwitch>
            <FilterDiv
              style={{
                backgroundColor: isGridView ? "#242424" : "transparent",
              }}
            >
              <FilterIcon
                src={GridIcon}
                alt="Grid View"
                onClick={toggleGridView}
                style={{
                  width: 24,
                  height: 24,
                  cursor: "pointer",
                  filter: isGridView ? "none" : "grayscale(1)",
                }}
              />
            </FilterDiv>

            <FilterDiv
              style={{
                backgroundColor: !isGridView ? "#242424" : "transparent",
              }}
            >
              <FilterIcon
                src={ListIcon}
                alt="List View"
                onClick={toggleListView}
                style={{
                  width: 24,
                  height: 24,
                  cursor: "pointer",
                  filter: !isGridView ? "none" : "grayscale(1)",
                }}
              />
            </FilterDiv>
          </FilterSwitch>
        </Stack>
      </Col>
    </Row>
  );
};
