import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../components/Tooltip/Tooltip";

const meta = {
  title: "Consalud/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    placement: { control: "select", options: ["left", "right", "midle"] },
    mobilePlacement: { control: "select", options: ["left", "right", "midle"] },
    className: { control: "text" },
  },
  args: {
    placement: "left",
    mobilePlacement: undefined,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placement: "left",
    children: "Este es el contenido del tooltip. Soporta varias líneas y HTML simple."
  },
  render: (args) => (
    <div
      className="parent-tooltip"
      style={{ position: "relative", padding: 24, border: "1px dashed #ccc" }}
    >
      <button type="button">Pasa el mouse por aquí</button>
      <Tooltip {...args}>
        Este es el contenido del tooltip. Soporta varias líneas y HTML simple.
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  args: {
    placement: "left",
    children: "Tooltip example"
  },
  render: (args) => (
    <div style={{ display: "grid", gap: 24 }}>
      <div
        className="parent-tooltip"
        style={{ position: "relative", padding: 24, border: "1px dashed #ccc" }}
      >
        <span>Left</span>
        <Tooltip {...args} placement="left">
          Tooltip a la izquierda
        </Tooltip>
      </div>
      <div
        className="parent-tooltip"
        style={{ position: "relative", padding: 24, border: "1px dashed #ccc" }}
      >
        <span>Right</span>
        <Tooltip {...args} placement="right">
          Tooltip a la derecha
        </Tooltip>
      </div>
      <div
        className="parent-tooltip"
        style={{ position: "relative", padding: 24, border: "1px dashed #ccc" }}
      >
        <span>Midle</span>
        <Tooltip {...args} placement="midle">
          Tooltip centrado (midle)
        </Tooltip>
      </div>
    </div>
  ),
};
