import type { Meta, StoryObj } from "@storybook/preact";
import { GoToTop } from "./GoToTop";

const meta: Meta<typeof GoToTop> = {
  title: "Components/GoToTop",
  component: GoToTop,
  parameters: {
    docs: {
      description: {
        component: "Fixed button that appears after scrolling 300px. Scrolls to top on click.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GoToTop>;

export const Default: Story = {
  render: () => <GoToTop />,
};
