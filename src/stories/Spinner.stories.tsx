import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "../components/Spinner/Spinner";

const meta = {
  title: "Consalud/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    variant: { control: "select", options: ["default", "light"] },
    speedMs: { control: "number" },
    label: { control: "text" },
  },
  args: {
    size: "md",
    variant: "default",
    speedMs: 2000,
    label: "Cargando…",
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
      <Spinner {...args} size="xl" />
    </div>
  ),
};

export const ModoOscuro: Story = {
  render: (args) => (
    <div style={{ background: "#111827", padding: 24 }}>
      <Spinner {...args} variant="light" label="Cargando…" />
    </div>
  ),
};
