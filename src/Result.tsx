import { Box, Center, Text } from '@mantine/core';

type ResultProps = {
  diff: number;
  tanka: number;
};

export const WinResult: React.FC<ResultProps> = ({ diff, tanka }) => {
  return (
    <Box>
      <Center style={{ fontSize: '24px' }}>
        @
        <Text component='span' fw='bold'>
          {tanka}
        </Text>
      </Center>
      <Center>
        <Box
          mt={'md'}
          mb={'md'}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span
            style={{
              fontSize: '50px',
              color: 'white',
              transform: 'rotate(-13deg)',
              fontWeight: 'bold'
            }}
          >
            得
          </span>
        </Box>
      </Center>
      <span>
        こっちのほうが
        <Text component='span' fw='bold'>
          {diff}円
        </Text>
        お得!
      </span>
    </Box>
  );
};

export const LoseResult: React.FC<ResultProps> = ({ diff, tanka }) => {
  return (
    <Center style={{ fontSize: '24px' }}>
      @
      <Text component='span' fw='bold'>
        {tanka}
      </Text>
    </Center>
  );
};
