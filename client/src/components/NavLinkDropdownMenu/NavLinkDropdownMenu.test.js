import React from "react";
import { shallow } from "enzyme";
import NavLinkDropdownMenu from "./NavLinkDropdownMenu.js";
import { findByTestAttribute } from "../../../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<NavLinkDropdownMenu {...props} />);
  return component;
};
describe("NavLinkDropdownMenu component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      menuList: [
        {
          text: "About",
          to: "/"
        },
        {
          text: "Home",
          to: "/"
        }
      ]
    };
    wrapper = setUp(props);
  });
  it("Should render as expected", () => {
    const component = findByTestAttribute(wrapper, ".NavLinkDropdownMenu");
    expect(component.length).toBe(1);
  });
});
