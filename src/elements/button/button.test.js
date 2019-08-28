import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { Button } from './button';

describe('Button', () => {

	it('renders without crashing', () => {
		shallow(
			<Button>Test button</Button>
		);
	});

})

describe('Button - default render', () => {

	let component;

	beforeAll( () => {
		component = shallow(
			<Button>Test Button</Button>
		);

		console.log(component.debug());
	});

	it('matches snapshot', () => {
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render as a button element by default', () => {
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
	})

	it('should not output a "type" attribute by default', () => {
		expect(component.at(0).is('[type]')).toEqual(false);
	})

	it('should not output a "to" attribute by default', () => {
		expect(component.at(0).is('[to]')).toEqual(false);
	})

	it('should not output a "href" attribute by default', () => {
		expect(component.at(0).is('[href]')).toEqual(false);
	})

	it('should render a correct button label when passed a child prop', () => {
		expect(component.prop('children')).toBe('Test Button');
	})

})

describe('Button - type "button" render', () => {

	let component,
			buttonOnClickFunc;

	beforeAll( () => {

		buttonOnClickFunc = jest.fn();

		component = shallow(
			<Button
				name="test-button"
				type="button"
				classes="test-button-class"
				disabled={false}
				onClick={buttonOnClickFunc}
			>
				Test Button
			</Button>
		);

	});

	it('should be rendered as a button element', () => {
		expect(component.type()).toBe('button');
	});

	it('should output the correct class name when provied as classes prop', () => {
		expect(component.at(0).hasClass('button test-button-class')).toEqual(true);
	})

	it('should output a name attribute with the correct value', () => {
		expect(component.at(0).is('[name="test-button"]')).toEqual(true);
	});

	it('should output a type attribute with the correct value', () => {
		expect(component.at(0).is('[type="button"]')).toEqual(true);
	})

	it('should not render as disabled when provided a "disabled={false}" prop', () => {
		expect(component.at(0).is('[disabled]')).toEqual(false);
	})

	it('should fire a callback function onClick', () => {
		component.simulate('click');
		expect(buttonOnClickFunc).toHaveBeenCalled();
	});

	it('should render a correct button label when passed a child prop', () => {
		expect(component.prop('children')).toBe('Test Button');
	})

})

// describe('Button - ')