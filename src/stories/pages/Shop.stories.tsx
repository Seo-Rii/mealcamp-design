import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Page from '../../pages/shop';
import {viewportConfig} from "../common/config";

export default {
    title: 'Page/shop',
    component: Page,
    parameters: {
        layout: 'fullscreen',
        ...viewportConfig(true),
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page/>;

export const View = Template.bind({});
View.args = {};