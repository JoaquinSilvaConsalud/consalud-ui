import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';


const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const meta = {
  title: 'Consalud/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Input base de Consalud con diferentes tamaños, estados y configuraciones.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    type: 'password',
    required: true,
    placeholder: 'Enter your password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    error: 'Please enter a valid email address',
    placeholder: 'Enter your email',
    defaultValue: 'invalid-email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    helperText: 'Must be at least 3 characters long',
    placeholder: 'Enter username',
  },
};


export const WithIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    icon: <EyeIcon />,
  },
};


export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This is disabled',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input size="small" label="Small" placeholder="Small input" />
      <Input size="medium" label="Medium" placeholder="Medium input" />
      <Input size="large" label="Large" placeholder="Large input" />
    </div>
  ),
};