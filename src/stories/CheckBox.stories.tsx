import type { Meta, StoryObj } from "@storybook/react";
import CheckBox from "../components/CheckBox/CheckBox";

const meta = {
  title: "Consalud/CheckBox",
  component: CheckBox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
  args: {
    label: "Acepto términos y condiciones",
    disabled: false,
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};
