import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { ViewHeader } from '../js/components/view-header';

describe('ViewHeader', () => {

	it('should render without crashing', () => {
		shallow(
			<ViewHeader
				linkLabel="Test link label"
				link="/"
				title="Test title"
			/>
		);
	})

});

describe('ViewHeader - default render', () => {

	let component;

	beforeAll( () => {
		component = shallow(
			<ViewHeader />
		);
	});

	it('should match snapshot', () => {
		expect(toJson(component)).toMatchSnapshot();
	});

	it('should render the root node as a "div" tag', () => {
		expect(component.type()).toBe('div');
	});

	it('should have the correct class name applied to the root node', () => {
		expect(component.at(0).hasClass('view-header')).toEqual(true);
	});

	it('should contain one child React component equal to "<TextLink />"', () => {
		expect(component.children('TextLink').length).toEqual(1);
	});

	it('should contain one child React component equal to "<Title />"', () => {
		expect(component.children('Title').length).toEqual(1);
	});

	it('should set a class of "size-lg" to the "<Title />" child component', () => {
		expect(component.children('Title').prop('classes')).toBe('size-lg');
	});

	afterAll( () => {
		component.unmount();
	});

});

describe('ViewHeader - additional classes', () => {

	let component;

	beforeAll( () => {
		component = shallow(
			<ViewHeader
				classes="test-view-header-class"
			/>
		);
	});

	it('should output the correct class name when provied via "classes" prop', () => {
		expect(component.at(0).hasClass('test-view-header-class')).toEqual(true);
	});

	afterAll( () => {
		component.unmount();
	});

});

describe('ViewHeader - integration <TextLink />', () => {

	let component;

	beforeAll( () => {
		component = shallow(
			<ViewHeader
				linkLabel="Test link label"
				link="/"
			/>
		);
	});

	it('should pass the "linkLabel" prop value to the "<TextLink />" child component child prop', () => {
		expect(component.children('TextLink').prop('children')).toBe('Test link label');
	});

	it('should pass the "link" prop value to the "<TextLink />" child component link prop', () => {
		expect(component.children('TextLink').prop('link')).toBe('/');
	});

	afterAll( () => {
		component.unmount();
	});

});

describe('ViewHeader - integration <TextLink />', () => {

	let component;

	beforeAll( () => {
		component = shallow(
			<ViewHeader
				title="Test title"
				element="h1"
			/>
		);
	});

	it('should pass the "title" prop value to the "<Title />" child component child prop', () => {
		expect(component.children('Title').prop('children')).toBe('Test title');
	});

	it('should pass the "element" prop value to the "<Title />" child component elemement prop', () => {
		expect(component.children('Title').prop('element')).toBe('h1');
	});

});