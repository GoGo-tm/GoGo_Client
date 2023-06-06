import { Meta, StoryObj } from '@storybook/react';

import HikingCard from './HikingCard';

export default {
  title: 'Design System/Card/HikingCard',
  component: HikingCard,
} as Meta<typeof HikingCard>;

type Story = StoryObj<typeof HikingCard>;

const args: Story['args'] = {};

const render: Story['render'] = (args) => {
  return <HikingCard {...args} />;
};

export const Default: Story = {
  args,
  render,
};
