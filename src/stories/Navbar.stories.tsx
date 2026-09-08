/*
 * Navbar.stories.tsx — Storybook stories for Navbar
 *
 * Covers: default (empty right slot), with right-side controls.
 */

import type { Meta, StoryObj } from "@storybook/preact";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    right: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  name: "Empty (no right slot)",
  render: () => <Navbar />,
};

export const WithThemeToggle: Story = {
  name: "With ThemeToggle",
  render: () => <Navbar right={<ThemeToggle />} />,
};
