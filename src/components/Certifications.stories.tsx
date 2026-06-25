import type { Meta, StoryObj } from "@storybook/preact";
import { Certifications } from "./Certifications";
import { useI18n } from "../lib/i18n";

const meta: Meta<typeof Certifications> = {
  title: "Components/Certifications",
  component: Certifications,
};

export default meta;
type Story = StoryObj<typeof Certifications>;

const Wrapper = ({ lang = "en" }: { lang?: string }) => {
  const i18n = useI18n(lang as "en" | "es");
  return <Certifications i18n={i18n} />;
};

export const English: Story = {
  render: () => <Wrapper lang="en" />,
};

export const Spanish: Story = {
  render: () => <Wrapper lang="es" />,
};
