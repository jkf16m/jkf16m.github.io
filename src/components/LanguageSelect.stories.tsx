import type { Meta, StoryObj } from "@storybook/preact";
import { LanguageSelect } from "./LanguageSelect";

const meta: Meta<typeof LanguageSelect> = {
  title: "Components/LanguageSelect",
  component: LanguageSelect,
  argTypes: {
    value: { control: "select", options: ["en", "es"] },
  },
};

export default meta;
type Story = StoryObj<typeof LanguageSelect>;

export const English: Story = {
  args: { value: "en", onChange: () => {} },
};

export const Spanish: Story = {
  args: { value: "es", onChange: () => {} },
};
