import {
  Box,
  chakra,
  Flex,
  Stack,
  Text,
  VisuallyHidden,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaYoutube } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <Link isExternal>
      <chakra.button
        rounded={'full'}
        w={10}
        h={10}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </Link>
  );
};

export default function Footer() {
  return (
    <Box>
      <Flex
        direction={'row'}
        padding={8}
        align={'center'}
        justify={'space-between'}
      >
        <Text>{`© ${new Date().getFullYear().toString()} ZWEERTS.xyz`}</Text>
        <Stack direction={'row'} spacing={3}>
          <SocialButton label={'GitHub'} href={'https://github.com/kanovic'}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={'YouTube'}
            href={'https://www.youtube.com/channel/UCRTvsBTvhRa94hoCvQ2zMyA'}
          >
            <FaYoutube />
          </SocialButton>
        </Stack>
      </Flex>
    </Box>
  );
}
