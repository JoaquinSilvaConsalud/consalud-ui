import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';

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

  args: {
    children: 'Card',
  },
  render: () => (
    <Card style={{ width: '320px', maxWidth: '100%' }}>
      <h1>Card Title</h1>
      <p>Esta es una tarjeta básica de Consalud con contenido simple.
        Perfecta para mostrar información de manera organizada.
      </p>
      <Button>Button</Button>
    </Card>
  ),
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


export const AllVariantsAndSizes: Story = {
  args: {
    children: 'Card',
  },
  render: () => (
    <Card>
      Hola Mundo
    </Card>
  ),
};

