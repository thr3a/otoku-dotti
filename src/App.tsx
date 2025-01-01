import '@mantine/core/styles.css';
import { Box, MantineProvider, Title } from '@mantine/core';
import { Form } from './Form';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Box maw={400} mx='auto'>
        <Title mt={'md'} order={2}>
          どっちお得くん
        </Title>
        <Title order={6} mb={'md'} c={'dimmed'}>
          物価上昇を耐え抜け
        </Title>
        <Form />
      </Box>
    </MantineProvider>
  );
}
