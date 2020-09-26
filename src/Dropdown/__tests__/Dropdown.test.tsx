/**
 * @jest-environment jsdom
 */
// @jest-environment jsdom Добавлять только если
//в компоненте есть обращение к API браузера (window)

import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { Dropdown } from "../Dropdown";

configure({ adapter: new Adapter() });

describe("Dropdown", () => {
  test("should render", () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.find("div.container").isEmptyRender()).toBeFalsy();
  });

  test("should render (snapshot)", () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
