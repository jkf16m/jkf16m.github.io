/*
 * ThemeToggle.stories.tsx — Storybook stories for ThemeToggle
 *
 * Covers: default state (reads from localStorage / system preference).
 */

import type { Meta, StoryObj } from "@storybook/preact";
import { ThemeToggle } from "../components/ThemeToggle";

const meta: Meta<typeof ThemeToggle> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  name: "Default (persisted state)",
};
