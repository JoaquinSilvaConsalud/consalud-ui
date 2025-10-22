import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../components/Logo/Logo';

const meta = {
    title: 'Consalud/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'radio',
            options: ['logo', 'iso'],
            description: 'Tipo de logo a mostrar'
        },
        onDarkBackground: {
            control: 'boolean',
            description: 'Si el logo se muestra sobre fondo oscuro'
        }
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof Logo>;

export const FullLogo: Story = {
    args: {
        type: 'logo',
        onDarkBackground: false
    },
    decorators: [
        (Story) => (
            <div style={{ width: '200px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Iso: Story = {
    args: {
        type: 'iso',
        onDarkBackground: false
    },
    decorators: [
        (Story) => (
            <div style={{ width: '100px' }}>
                <Story />
            </div>
        ),
    ],
};

export const LogoOnDark: Story = {
    args: {
        type: 'logo',
        onDarkBackground: true
    },
    decorators: [
        (Story) => (
            <div style={{ width: '200px', background: '#00A599', padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
};

export const IsoOnDark: Story = {
    args: {
        type: 'iso',
        onDarkBackground: true
    },
    decorators: [
        (Story) => (
            <div style={{ width: '100px', background: '#00A599', padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
};

export const SmallLogo: Story = {
    args: {
        type: 'logo',
        onDarkBackground: false
    },
    decorators: [
        (Story) => (
            <div style={{ width: '100px' }}>
                <Story />
            </div>
        ),
    ],
};

export const LargeLogo: Story = {
    args: {
        type: 'logo',
        onDarkBackground: false
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};