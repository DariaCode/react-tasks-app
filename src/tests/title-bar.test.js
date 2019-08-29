import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { TitleBar } from '../js/components/title-bar';

describe('TitleBar', () => {

	it('renders without crashing', () => {
		shallow(<TitleBar />)
	})

})

describe('TitleBar - default render', () => {

	let component;

	beforeAll( () => {
		component = shallow(
			<TitleBar/>
		);
	});

	it('matches snapshot', () => {
		expect(toJson(component)).toMatchSnapshot();
	})

	it('should have the correct class applied to the root node', () => {
		expect(component.find('div').at(0).hasClass('title-bar')).toEqual(true);
	})

	it('should not output left-slot and right-slot containers if not given leftSlot or rightSlot props', () => {
		expect(component.exists('.left-slot')).toEqual(false);
		expect(component.exists('.right-slot')).toEqual(false);
	})

	afterAll( () => {
		component.unmount();
	})

})

describe('TitleBar - props', () => {

	let component;

	beforeAll( () => {
		component = shallow(
			<TitleBar
				classes='test-class'
				leftSlot='Left slot content'
				rightSlot='Right slot content'
			/>
		);
	});

	it('should allow classes to be passed as props to the root node', () => {
		expect(component.find('div').at(0).hasClass('test-class')).toEqual(true);
	});

	it('should output the correct dom node and className if given leftSlot props', () => {
		expect(component.exists('div.left-slot')).toEqual(true);
	});

	it('should output the correct left-slot content if given leftSlot props', () => {
		expect(component.find('div.left-slot').text()).toBe('Left slot content');
	});

	it('should output the correct dom node and className if given rightSlot props', () => {
		expect(component.exists('div.right-slot')).toEqual(true);
	});

	it('should output the correct right-slot content if given rightSlot props', () => {
		expect(component.find('div.right-slot').text()).toBe('Right slot content');
	});

	afterAll( () => {
		component.unmount();
	})

})