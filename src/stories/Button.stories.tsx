import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/Button';

const meta = {
  title: 'Consalud/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Button base de Consalud con diferentes variantes, tamaños y estados.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'inverted'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
  },
};

export const Inverted: Story = {
  args: {
    variant: 'inverted',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
};

export const AllVariantsAndSizes: Story = {
  args: {
    children: 'Button', // Añadimos un valor por defecto para satisfacer a TypeScript
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexDirection: 'column' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <div style={{ backgroundColor: 'var(--consalud-gray-700)', padding: '1rem', margin: 'auto' }}>

        <Button variant="inverted">Inverted</Button>
      </div>
      <Button size="small">Small (12px)</Button>
      <Button size="medium">Medium (14px)</Button>
      <Button size="large">Large (16px)</Button>
    </div>
  ),
};

