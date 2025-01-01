import '@mantine/core/styles.css';
import { Box, Container, MantineProvider, Title } from '@mantine/core';
import { Form } from './Form';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container id='container' maw={400}>
        <Title mt={'sm'} order={2}>
          どっちお得くん
        </Title>
        <Title order={6} mb={'sm'} c={'dimmed'}>
          物価上昇を耐え抜け
        </Title>
        <Form />
      </Container>
    </MantineProvider>
  );
}
