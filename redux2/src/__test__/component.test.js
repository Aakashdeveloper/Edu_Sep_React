import React from 'react';
import Footer from '../component/Footer';
import {create} from 'react-test-renderer';
import MyButton from '../component/MyButton';

describe('Testing Components',()=>{
    test('Testing Footer',() => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    });
    test("Testing My Button",() => {
        const component = create(<MyButton/>);
        const instance = component.root;
        const button = instance.findByType("button");
        button.props.onClick();
        expect(button.props.children).tobe('SomeThing')
    })
})