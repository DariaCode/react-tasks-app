import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { Button } from './button';

jest.mock("react-router-dom", () => ({
	Link: 'a',
}));

describe('Button', () => {

	it('should render without crashing', () => {
		shallow(
			<Button>Test button</Button>
		);
	});

});

describe('Button - default render', () => {

	let component;

	beforeAll( () => {
		component = shallow(
			<Button>Test Button</Button>
		);
	});

	it('should match snapshot', () => {
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render as a "button" tag by default', () => {
		expect(component.type()).toBe('button');
	});

	it('should have the correct class name applied to the root node', () => {
		expect(component.at(0).hasClass('button')).toEqual(true);
	});

	it('should not be "disabled" by default', () => {
		expect(component.at(0).is('[disabled]')).toEqual(false);
	});

	it('should not output a "name" attribute by default', () => {
		expect(component.at(0).is('[name]')).toEqual(false);
	});

	it('should not output a "type" attribute by default', () => {
		expect(component.at(0).is('[type]')).toEqual(false);
	});

	it('should not output a "to" attribute by default', () => {
		expect(component.at(0).is('[to]')).toEqual(false);
	});

	it('should not output a "href" attribute by default', () => {
		expect(component.at(0).is('[href]')).toEqual(false);
	});

	it('should render a correct button label when passed a child prop', () => {
		expect(component.prop('children')).toBe('Test Button');
	});

});

describe('Button - type "button" render', () => {

	let component,
			buttonOnClickFunc;

	beforeAll( () => {

		buttonOnClickFunc = jest.fn();

		component = shallow(
			<Button
				name="test-button"
				type="button"
				onClick={buttonOnClickFunc}
			>
				Test Button
			</Button>
		);

	});

	it('should be rendered as a "button" tag', () => {
		expect(component.type()).toBe('button');
	});

	it('should output a name attribute with the correct value', () => {
		expect(component.at(0).is('[name="test-button"]')).toEqual(true);
	});

	it('should output a type attribute with the correct value', () => {
		expect(component.at(0).is('[type="button"]')).toEqual(true);
	});

	it('should fire a callback function onClick', () => {
		component.simulate('click');
		expect(buttonOnClickFunc).toHaveBeenCalled();
	});

});

describe('Button - external link', () => {

	let component;

	beforeAll( () => {

		component = shallow(
			<Button
				link="http://binaryjim.co.uk"
				external={true}
			>
				Test Button
			</Button>
		);

	});

	it('should render as an "a" tag', () => {
		expect(component.type()).toBe('a');
	});

	it('should not render a "to" attribute', () => {
		expect(component.at(0).is('[to]')).toEqual(false);
	});

	it('should render a "href" attribute equal to the value of "props.link"', () => {
		expect(component.at(0).is('[href="http://binaryjim.co.uk"]')).toEqual(true);
	});

	it('should render a "target" attribute equal to "_blank"', () => {
		expect(component.at(0).is('[target="_blank"]')).toEqual(true);
	});

});

describe('Button - internal link', () => {

	let component;

	beforeAll( () => {

		component = shallow(
			<Button
				link="/"
			>
				Test Button
			</Button>
		);

	});

	it('should render as an "a" tag', () => {
		expect(component.type()).toBe('a');
	});

	it('should render a "to" attribute', () => {
		expect(component.at(0).is('[to="/"]')).toEqual(true);
	});

	it('should not output a "href" attribute', () => {
		expect(component.at(0).is('[href]')).toEqual(false);
	});

});

describe('Button - disabled', () => {

	let component;

	beforeAll( () => {

		component = shallow(
			<Button
				link="http://binaryjim.co.uk"
				external={true}
				disabled={true}
			>
				Test Button
			</Button>
		);

	});

	it('should render as disabled when provided a "disabled={true}" prop', () => {
		expect(component.at(0).is('[disabled]')).toEqual(true);
	});

});

describe('Button - enabled', () => {

	let component;

	beforeAll( () => {

		component = shallow(
			<Button
				link="http://binaryjim.co.uk"
				external={true}
				disabled={false}
			>
				Test Button
			</Button>
		);

	});

	it('should not render as disabled when provided a "disabled={false}" prop', () => {
		expect(component.at(0).is('[disabled]')).toEqual(false);
	});

});

describe('Button - additional classes', () => {

	let component;

	beforeAll( () => {

		component = shallow(
			<Button
				classes="test-button-class"
				link="http://binaryjim.co.uk"
				external={true}
				disabled={false}
			>
				Test Button
			</Button>
		);

	});

	it('should output the correct class name when provied via "classes" prop', () => {
		expect(component.at(0).hasClass('button test-button-class')).toEqual(true);
	});

});