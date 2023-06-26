import { html } from 'lit';
import { Intro } from '../intro';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Example/Intro',
  tags: ['autodocs'],
  render: (args) => html`<intro-container context='btn-boarding'><button>on boarding btn</button></intro-container>
   The button will appear only on first time, remove it from local-storage if you would like to see it`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    context: 'some-context'
  },
};
