import React from "react";
import "../../tokens.css";
import { Card } from "../Card/Card";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import Spinner from "../Spinner/Spinner";

export interface ActionCardProps {
  title?: string;
  description?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  inputLabel?: string;
  inputPlaceholder?: string;
  inputType?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  passwordType?: string;
  checkboxLabel?: string;
  actionText?: string;
  onAction?: (data: {
    input: string;
    password: string;
    checked: boolean;
  }) => void;

  className?: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title = "Configuración",
  description,
  loading = false,
  disabled = false,
  inputLabel = "Rut",
  inputPlaceholder = "Ingresa tu rut",
  inputType = "text",
  passwordLabel = "Password",
  passwordPlaceholder = "Ingresa tu contraseña",
  passwordType = "password",
  checkboxLabel = "Recordar contraseña",
  actionText = "Login",
  onAction,
  className,
}) => {
  const [inputVal, setInputVal] = React.useState("");
  const [passwordVal, setPasswordVal] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const handleSubmit = () => {
    if (disabled || loading) return;
    onAction?.({ input: inputVal, password: passwordVal, checked });
  };

  return (
    <Card
      className={className}
      style={{
        width: '320px',
        opacity: disabled ? 0.8 : 1,
        filter: disabled ? "grayscale(1)" : "none",
      }}>
      <h3>{title}</h3>
      {description && <p className="ac__desc">{description}</p>}
      {loading && <Spinner size="md" ariaLabel="Cargando…" style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
      }} />}


      <label className="ac__label">{inputLabel}</label>
      <Input
        type={inputType}
        value={inputVal}
        placeholder={inputPlaceholder}
        disabled={disabled || loading}
        onChange={(e: any) => setInputVal(e?.target?.value ?? "")}
      />

      <label className="ac__label">{passwordLabel}</label>
      <Input
        type={passwordType}
        value={passwordVal}
        placeholder={passwordPlaceholder}
        disabled={disabled || loading}
        onChange={(e: any) => setPasswordVal(e?.target?.value ?? "")}
      />

      <CheckBox
        label={checkboxLabel}
        checked={checked}
        disabled={disabled || loading}
        onChange={(v) => setChecked(v)}
      />

      <Button
        variant="primary"
        disabled={disabled || loading}
        onClick={handleSubmit}
      >
        {actionText}
      </Button>
    </Card>
  );
};

export default ActionCard;
