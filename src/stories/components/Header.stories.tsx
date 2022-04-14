import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Header} from '../../components/Header';
import {viewportConfig} from "../common/config";

export default {
    title: 'Component/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
        ...viewportConfig(false),
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        name: 'Jane Doe',
    },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
