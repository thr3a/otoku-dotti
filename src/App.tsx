import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { Form } from './Form';
// import { Welcome } from './Welcome/Welcome';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Form />
    </MantineProvider>
  );
}
