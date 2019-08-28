import React from 'react';
import { shallow, mount } from 'enzyme';
import { TitleBar } from './titleBar';

describe('TitleBar - default render', () => {

	it('renders without crashing', () => {
		shallow(<TitleBar />)
	})

	it('matches snapshot', () => {
		const component = shallow(<TitleBar />);
		expect(component).toMatchSnapshot();
	})

	it('should have the correct class applied to the root node', () => {
		const component = shallow(<TitleBar />);
		console.log(component.debug());
		expect(component.find('div').at(0).hasClass('title-bar')).toEqual(true);
	})

	it('should allow classes to be passed as props to the root node', () => {
		const component = mount(
			<TitleBar 
				classes='test-class'
			/>
		);
		expect(component.prop('classes')).toBe('test-class');
		expect(component.find('div').at(0).hasClass('test-class')).toEqual(true);
	})

	it('should not output left-slot and right-slot containers if not given leftSlot or rightSlot props', () => {
		const component = shallow(<TitleBar />);
		expect(component.exists('.left-slot')).toEqual(false);
		expect(component.exists('.right-slot')).toEqual(false);
	})

})

describe('TitleBar - leftSlot content', () => {

	let component;

	beforeAll( () => {
		component = mount(
			<TitleBar
				leftSlot='Left slot content'
			/>
		);
	});

	it('should recieve left-slot content if given leftSlot props', () => {
		expect(component.prop('leftSlot')).toBe('Left slot content');
	});

	it('should output the correct dom node and className if given leftSlot props', () => {
		expect(component.exists('div.left-slot')).toEqual(true);
	});

	it('should output the correct left-slot content if given leftSlot props', () => {
		expect(component.find('div.left-slot').text()).toBe('Left slot content');
	});

	afterAll( () => {
		component.unmount();
	})

})

describe('TitleBar - rightSlot content', () => {

	let component;

	beforeAll( () => {
		component = mount(
			<TitleBar
				rightSlot='Right slot content'
			/>
		);
	});

	it('should recieve right-slot content if given rightSlot props', () => {
		expect(component.prop('rightSlot')).toBe('Right slot content');
	});

	it('should output the correct dom node className if given rightSlot props', () => {
		expect(component.exists('div.right-slot')).toEqual(true);
	});

	it('should output the correct right-slot content if given rightSlot props', () => {
		expect(component.find('.right-slot').text()).toBe('Right slot content');
	});

	afterAll( () => {
		component.unmount();
	})

})