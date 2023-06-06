import { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Design System/Card/Card',
  component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

const args: Story['args'] = {};

const render: Story['render'] = (args) => {
  const { children, ...rest } = args;
  return <Card {...rest}>{children}</Card>;
};

export const Default: Story = {
  args,
  render,
};
