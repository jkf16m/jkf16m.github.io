import type { Meta, StoryObj } from "@storybook/preact";
import { Footer } from "./Footer";
import { useI18n } from "../lib/i18n";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

const Wrapper = ({ lang = "en" }: { lang?: string }) => {
  const i18n = useI18n(lang as "en" | "es");
  return <Footer i18n={i18n} />;
};

export const English: Story = {
  render: () => <Wrapper lang="en" />,
};

export const Spanish: Story = {
  render: () => <Wrapper lang="es" />,
};
