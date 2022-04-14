import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from '../../components/Button';
import {viewportConfig} from "../common/config";

export default {
    title: 'Component/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    parameters: {
        ...viewportConfig(false),
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const Raised = Template.bind({});
Raised.args = {
    primary: true,
    label: 'Button',
    raised: true,
};
