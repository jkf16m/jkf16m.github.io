import type { Meta, StoryObj } from "@storybook/preact";
import { Contact } from "./Contact";
import { useI18n } from "../lib/i18n";

const meta: Meta<typeof Contact> = {
  title: "Components/Contact",
  component: Contact,
};

export default meta;
type Story = StoryObj<typeof Contact>;

const Wrapper = ({ lang = "en" }: { lang?: string }) => {
  const i18n = useI18n(lang as "en" | "es");
  return <Contact i18n={i18n} />;
};

export const English: Story = {
  render: () => <Wrapper lang="en" />,
};

export const Spanish: Story = {
  render: () => <Wrapper lang="es" />,
};
