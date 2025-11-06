import type { Meta, StoryObj } from "@storybook/react";
import ActionCard from "../components/ActionCard/ActionCard";

const meta = {
  title: "Consalud/ActionCard",
  component: ActionCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },

    inputLabel: { control: "text" },
    inputPlaceholder: { control: "text" },
    inputType: { control: "text" },

    passwordLabel: { control: "text" },
    passwordPlaceholder: { control: "text" },
    passwordType: { control: "text" },

    checkboxLabel: { control: "text" },

    actionText: { control: "text" },
    onAction: { action: "onAction" },
  },
  args: {
    title: "Login",
    description: "Completa los campos",
    loading: false,
    disabled: false,

    inputLabel: "Rut",
    inputPlaceholder: "12.345.678-9",
    inputType: "text",

    passwordLabel: "Password",
    passwordPlaceholder: "Ingresa tu contraseña",
    passwordType: "password",

    checkboxLabel: "Recordar contraseña",

    actionText: "Login",
  },
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };
