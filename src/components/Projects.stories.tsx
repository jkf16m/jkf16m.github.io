import type { Meta, StoryObj } from "@storybook/preact";
import { Projects } from "./Projects";
import { useI18n } from "../lib/i18n";

const meta: Meta<typeof Projects> = {
  title: "Components/Projects",
  component: Projects,
};

export default meta;
type Story = StoryObj<typeof Projects>;

const Wrapper = ({ lang = "en" }: { lang?: string }) => {
  const i18n = useI18n(lang as "en" | "es");
  return <Projects i18n={i18n} />;
};

export const English: Story = {
  render: () => <Wrapper lang="en" />,
};

export const Spanish: Story = {
  render: () => <Wrapper lang="es" />,
};
