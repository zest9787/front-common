import React from 'react';
import ActionButton from '../components/button/ActionButton'

export default {
    title: 'Example/ActionButton',
    component: ActionButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Button'
}