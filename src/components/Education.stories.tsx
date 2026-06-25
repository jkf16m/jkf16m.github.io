import type { Meta, StoryObj } from "@storybook/preact";
import { Education } from "./Education";
import { useI18n } from "../lib/i18n";

const meta: Meta<typeof Education> = {
  title: "Components/Education",
  component: Education,
};

export default meta;
type Story = StoryObj<typeof Education>;

const Wrapper = ({ lang = "en" }: { lang?: string }) => {
  const i18n = useI18n(lang as "en" | "es");
  return <Education i18n={i18n} />;
};

export const English: Story = {
  render: () => <Wrapper lang="en" />,
};

export const Spanish: Story = {
  render: () => <Wrapper lang="es" />,
};
