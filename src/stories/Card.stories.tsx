import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from '../components/Card';

const meta = {
  title: 'Consalud/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Card base de Consalud para mostrar contenido en formato contenedor.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    clickable: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div style={{ width: '320px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <p>
        Esta es una tarjeta básica de Consalud con contenido simple.
        Perfecta para mostrar información de manera organizada.
      </p>
    ),
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Título de la Tarjeta',
    subtitle: 'Subtítulo informativo',
    children: (
      <p>
        Contenido principal de la tarjeta con título y subtítulo definidos.
      </p>
    ),
  },
};
