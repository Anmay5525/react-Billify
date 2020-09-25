import React from 'react';
import renderer from 'react-test-renderer';
import RightPanel from '../RightPanel';

it('renders correctly',()=>{
    const tree=renderer.create(<RightPanel/>).toJSON();
    expect(tree).toMatchSnapshot();
});