import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';
import { Link } from 'react-router-dom';

test('Header should be contain two links', () => {
    // Render a Header with label in the document
    const component = shallow(<Header />);

    expect(component.find(Link).length).toEqual(2);
});