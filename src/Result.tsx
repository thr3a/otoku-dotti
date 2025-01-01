import { Box, Center, Text } from '@mantine/core';

type ResultProps = {
  diff: number;
  tanka: number;
};

const Tokumark = () => {
  return (
    <Box
      mt={'sm'}
      mb={'sm'}
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
  );
};

export const WinResult: React.FC<ResultProps> = ({ diff, tanka }) => {
  return (
    <Box>
      <Center fz={'24px'}>
        @
        <Text component='span' fw='bold'>
          {tanka}
        </Text>
      </Center>
      <Center>
        <Tokumark />
      </Center>
      <Center>
        <span>
          同じ分量買った場合、こっちの方が
          <Text component='span' fw='bold'>
            {diff}円
          </Text>
          お得！😆
        </span>
      </Center>
    </Box>
  );
};

export const LoseResult: React.FC<ResultProps> = ({ tanka }) => {
  return (
    <Center fz={'24px'}>
      @
      <Text component='span' fw='bold'>
        {tanka}
      </Text>
    </Center>
  );
};
