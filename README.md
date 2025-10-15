# @consalud/consalud-ui

Librería de componentes UI de Consalud construida con React, TypeScript, Vite y Storybook.

## 🎨 Características

- ✅ Componentes React con TypeScript
- ✅ Sistema de tokens CSS con el color principal de Consalud (#00CBBF)
- ✅ Documentación interactiva con Storybook
- ✅ Soporte para múltiples variantes y tamaños
- ✅ Accesibilidad incluida por defecto

## 🚀 Instalación

Para desarrollo local, usar `file:` apuntando al repo de la librería:

```json
{
  "dependencies": {
    "@consalud/consalud-ui": "file:../consalud-ui"
  }
}
```

```bash
npm install
```

Cuando la librería esté publicada (npm o GitHub Packages):

```bash
npm install @consalud/consalud-ui
```

## 📦 Componentes Disponibles

### Button

Componente de botón con múltiples variantes y estados.

```tsx
import { Button } from "@consalud/consalud-ui";

<Button variant="primary" size="medium">
  Botón Principal
</Button>;
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'inverted'
- `size`: 'small' (12px) | 'medium' (14px) | 'large' (16px)
- `disabled`: boolean
- `loading`: boolean

## 🎨 Sistema de Tokens

La librería utiliza variables CSS para mantener consistencia visual,
la idea es poder tener actualizado este archivo `./src/tokens.css` con el plugin de figma:

```css
:root {
  --consalud-primary-light: #33d6cc;
  --consalud-primary: #00cbbf;
  --consalud-primary-dark: #00a69b;
}
```

### Comandos disponibles

```bash
# Iniciar Storybook para desarrollo
npm run storybook

# Construir librería para producción
npm run build:lib

# Construir Storybook para producción
npm run build-storybook
```
