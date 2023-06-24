import { html } from 'lit';
import { Intro } from '../intro';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Example/Intro',
  tags: ['autodocs'],
  render: (args) => html`<intro-container></intro-container>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    context: 'some-context'
  },
};
