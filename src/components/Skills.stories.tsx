import type { Meta, StoryObj } from "@storybook/preact";
import { Skills } from "./Skills";
import { useI18n } from "../lib/i18n";

const meta: Meta<typeof Skills> = {
  title: "Components/Skills",
  component: Skills,
};

export default meta;
type Story = StoryObj<typeof Skills>;

const Wrapper = ({ lang = "en" }: { lang?: string }) => {
  const i18n = useI18n(lang as "en" | "es");
  return <Skills i18n={i18n} />;
};

export const English: Story = {
  render: () => <Wrapper lang="en" />,
};

export const Spanish: Story = {
  render: () => <Wrapper lang="es" />,
};
