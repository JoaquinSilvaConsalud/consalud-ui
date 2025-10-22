import React from "react";
import "../../tokens.css"; // cambia a '@/tokens.css' si tienes alias
import "./CheckBox.css";

export interface CheckBoxProps {
  id?: string;
  className?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  /** texto de etiqueta (equivale a tu `text`) */
  label?: React.ReactNode;

  /** Modo controlado */
  checked?: boolean;
  /** Modo no controlado (valor inicial) */
  defaultChecked?: boolean;

  onFocus?: () => void;
  onBlur?: () => void;
  /** onChange con el estado booleano */
  onChange?: (checked: boolean) => void;

  /** Compatibilidad con tu API antigua (opcional) */
  setValue?: (checked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  className = "",
  name,
  value,
  disabled = false,
  label,
  checked, // controlado
  defaultChecked, // no controlado
  onFocus,
  onBlur,
  onChange,
  setValue, // compat: llamamos además de onChange
}) => {
  const isControlled = typeof checked === "boolean";
  const [inner, setInner] = React.useState<boolean>(!!defaultChecked);
  const current = isControlled ? (checked as boolean) : inner;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.checked;
    if (!isControlled) setInner(next);
    onChange?.(next);
    setValue?.(next); // compat con tu patrón anterior
  };

  return (
    <div id="checkbox-component">
      <div className={`checkbox-component ${className}`}>
        <div className="container-check">
          <input
            id={id}
            className="checkbox"
            type="checkbox"
            name={name}
            value={value}
            disabled={disabled}
            checked={isControlled ? current : undefined}
            defaultChecked={!isControlled ? defaultChecked : undefined}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        {label && (
          <div className="container-label">
            <label htmlFor={id}>{label}</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckBox;
