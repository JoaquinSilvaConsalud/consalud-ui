import type { Meta, StoryObj } from "@storybook/react";
import Datos from "../components/Icons/Datos";
import User from "../components/Icons/User";
import Direccion from "../components/Icons/Direccion";
import Beneficiarios from "../components/Icons/Beneficiarios";
import CambiarClave from "../components/Icons/CambiarClave";
import CerrarSesion from "../components/Icons/CerrarSesion";
import Contacto from "../components/Icons/Contacto";
import Cuentas from "../components/Icons/Cuentas";
import Dispositivos from "../components/Icons/Dispositivos";
import VerDatos from "../components/Icons/VerDatos";

const meta = {
    title: "Consalud/Icons",
    component: Datos,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Datos>;

export default meta;
type Story = StoryObj<typeof meta>;

const icons = [
    { name: "User", Component: User },
    { name: "Datos", Component: Datos },
    { name: "Direccion", Component: Direccion },
    { name: "Contacto", Component: Contacto },
    { name: "Beneficiarios", Component: Beneficiarios },
    { name: "Cuentas", Component: Cuentas },
    { name: "CambiarClave", Component: CambiarClave },
    { name: "Dispositivos", Component: Dispositivos },
    { name: "CerrarSesion", Component: CerrarSesion },
    { name: "VerDatos", Component: VerDatos },
];

export const All: Story = {
    render: () => (
        <div className="p-lg flex flex-col gap-lg">
            {icons.map(({ name, Component }) => (
                <div key={name} className="flex items-center gap-md">
                    <Component className="size-16" />
                    <Component className="size-32" />
                    <span>{name}</span>
                </div>
            ))}
        </div>
    ),
};

