import type { Meta, StoryObj } from "@storybook/preact";
import { Title } from "./Title";
import type { I18n } from "../lib/i18n";

const meta: Meta = {
  title: "Components/Title",
  argTypes: {
    amountUsd: { control: "number" },
  },
};

export default meta;

export const Default: StoryObj = {
  render: (args) => <Title {...args} />,
  args: {
    amountUsd: 1000000,
  },
};

export const Zero: StoryObj = {
  render: (args) => <Title {...args} />,
  args: {
    amountUsd: 0,
  },
};
