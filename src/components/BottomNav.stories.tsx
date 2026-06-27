import type { Meta, StoryObj } from "@storybook/preact";
import { BottomNav } from "./BottomNav";
import { useI18n } from "../lib/i18n";

const meta: Meta<typeof BottomNav> = {
  title: "Components/BottomNav",
  component: BottomNav,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomNav>;

const Wrapper = ({ lang = "en" }: { lang?: string }) => {
  const i18n = useI18n(lang as "en" | "es");
  return <BottomNav i18n={i18n} />;
};

export const English: Story = {
  render: () => <Wrapper lang="en" />,
};

export const Spanish: Story = {
  render: () => <Wrapper lang="es" />,
};
