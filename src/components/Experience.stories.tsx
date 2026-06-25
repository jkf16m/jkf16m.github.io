import type { Meta, StoryObj } from "@storybook/preact";
import { Experience } from "./Experience";
import { useI18n } from "../lib/i18n";

const meta: Meta<typeof Experience> = {
  title: "Components/Experience",
  component: Experience,
};

export default meta;
type Story = StoryObj<typeof Experience>;

const Wrapper = ({ lang = "en" }: { lang?: string }) => {
  const i18n = useI18n(lang as "en" | "es");
  return <Experience i18n={i18n} />;
};

export const English: Story = {
  render: () => <Wrapper lang="en" />,
};

export const Spanish: Story = {
  render: () => <Wrapper lang="es" />,
};
