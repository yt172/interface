import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Container from '@/components/container';
import { Routes, RoutesEnum } from '@/constants';
import { Box, Button, ResponsiveImage, Typography } from '@/elements';

const DEX: FC = () => {
  const t = useTranslations();
  const { push } = useRouter();

  return (
    <Box bg={['#F0F0F0', '#F0F0F0', '#F0F0F0', 'background']} as="section">
      <Container
        display="flex"
        mb={['1.875rem', '4.25rem']}
        flexDirection={[
          'row-reverse',
          'row-reverse',
          'row-reverse',
          'row-reverse',
          'row',
        ]}
        justifyContent={['center', 'center', 'center', 'space-between']}
      >
        <Box
          display={['none', 'none', 'none', 'none', 'block']}
          position="relative"
        >
          <Box
            left="-15rem"
            width="50rem"
            bottom="-10rem"
            minWidth="25rem"
            position="absolute"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="/images/web/home/cube@3x.webp 800w, /images/web/home/cube@3x.webp"
              />
              <source
                type="image/png"
                srcSet="/images/min/home/cube@3x.png 800w, /images/min/home/cube@3x.png"
              />
              <img
                alt="cube"
                width="100%"
                loading="lazy"
                decoding="async"
                src="/images/min/home/cube@3x.png"
              />
            </picture>
          </Box>
        </Box>
        <Box textAlign={['center', 'center', 'center', 'right']} maxWidth="50%">
          <Typography
            as="h2"
            variant="normal"
            fontWeight="900"
            fontStyle="normal"
            lineHeight={['2.743rem', '2.743rem', '2.743rem', '4.876rem']}
            fontSize={['2.25rem', '2.25rem', '2.25rem', '4rem']}
            textTransform="capitalize"
          >
            {t('common.dex')}
          </Typography>
          <Typography
            variant="normal"
            mt={['0.625rem', '0.625rem', '0.625rem', '0.313rem']}
            fontSize={['1rem', '1rem', '1rem', '1.5rem']}
            lineHeight={['1.625rem', '1.625rem', '1.625rem', '2.125rem']}
            mb={['1.25rem', '1.25rem', '1.25rem', '1.875rem']}
            px={['L', 'unset']}
          >
            {t('landingPage.dexSectionSubtitle')}
          </Typography>
          <Button
            width="145px"
            effect="hover"
            variant="primary"
            onClick={() => push(Routes[RoutesEnum.DApp])}
          >
            {t('landingPage.dexSectionButton')}
          </Button>
        </Box>
      </Container>
      <Box
        display="grid"
        position="relative"
        pb={['NONE', '10rem']}
        bg={['alternativeForeground', 'background']}
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 0 1fr']}
        gridTemplateRows={['1fr 0 1fr', '1fr 0 1fr', '1fr 0 1fr', '1fr']}
      >
        <Container
          px="XXL"
          as="aside"
          bg="accent"
          side="left"
          width="100%"
          pb="7.75rem"
          dividedBy={2}
          height="fit-content"
          color="textInverted"
          pt={['2.625rem', '5.188rem']}
          mt={['none', 'none', 'none', '-10rem']}
        >
          <Typography
            as="h3"
            variant="title2"
            textAlign="center"
            textTransform="capitalize"
            px={['unset', 'unset', 'unset', '3.6rem']}
          >
            {t('landingPage.stablePairTitle')}
          </Typography>
          <Box maxWidth="20rem" mx="auto" my="XXXL">
            <ResponsiveImage
              width="100%"
              alt="Stablecoin"
              path="home/stablecoin"
            />
          </Box>
          <Typography
            variant="large"
            fontWeight="700"
            textAlign="center"
            fontSize={['0.875rem', '1.5rem']}
            px={['unset', 'unset', 'unset', '3.6rem']}
          >
            K = 3XY + 3XY
            <br />
            <Typography
              variant="large"
              fontSize={['0.875rem', '1.5rem']}
              as="span"
              fontWeight="700"
              my={['unset', 'unset', '1rem', '1rem']}
            >
              {t('landingPage.stablePairDescription')}
            </Typography>
            <br />
            {t('landingPage.stablePairTax')}
          </Typography>
        </Container>
        <Box
          mx="M"
          mt={['-5rem', '-5rem', '-5rem', 'unset']}
          display="flex"
          position="relative"
          flexDirection={['row', 'row', 'row', 'column']}
          justifyContent={[
            'space-evenly',
            'space-evenly',
            'space-evenly',
            'space-between',
          ]}
        >
          <Box
            px="L"
            mx="S"
            py="XL"
            display="flex"
            bg="foreground"
            textAlign="center"
            alignItems="center"
            top={['unset', 'unset', 'unset', '-1.3rem']}
            justifyContent="center"
            width={['50%', '50%', '50%', '13.25rem']}
            height={['10rem', '10rem', '10rem', '12.625rem']}
            position={['static', 'static', 'static', 'absolute']}
            transform={['unset', 'unset', 'unset', 'translate(-50%,-20%)']}
          >
            <Typography variant="title3" lineHeight="2rem">
              {t('landingPage.dexSectionDescription')}
            </Typography>
          </Box>
          <Box
            p="XL"
            mx="S"
            display="flex"
            bg="foreground"
            textAlign="center"
            alignItems="center"
            bottom={['none', 'none', 'none', '-2rem']}
            justifyContent="center"
            width={['50%', '50%', '50%', '13.25rem']}
            height={['10rem', '10rem', '10rem', '12.625rem']}
            position={['static', 'static', 'static', 'absolute']}
            transform={['unset', 'unset', 'unset', 'translate(-50%,30%)']}
          >
            <Typography variant="title3" lineHeight="2rem">
              {t('landingPage.dexSectionOracle')}
            </Typography>
          </Box>
        </Box>
        <Container
          px="XXL"
          as="aside"
          side="right"
          width="100%"
          dividedBy={2}
          mb={['NONE', '-10rem']}
          pb={['unset', '7.75rem']}
          bg="alternativeForeground"
          pt={['8rem', '8rem', '8rem', '5.188rem']}
        >
          <Typography
            as="h3"
            textAlign="center"
            variant="title2"
            textTransform="capitalize"
            px={['unset', 'unset', 'unset', '3.6rem']}
          >
            {t('landingPage.volatilePairTitle')}
          </Typography>
          <Box maxWidth="20rem" mx="auto" my="XXXL">
            <ResponsiveImage width="100%" alt="Volatile" path="home/volatile" />
          </Box>
          <Typography
            variant="large"
            fontWeight="700"
            textAlign="center"
            textTransform="uppercase"
            fontSize={['0.875rem', '1.5rem']}
            px={['unset', 'unset', 'unset', '3.6rem']}
          >
            K = Y * X
            <br />
            <Typography
              variant="large"
              fontSize={['0.875rem', '1.5rem']}
              as="span"
              fontWeight="700"
              my={['unset', 'unset', '1rem', '1rem']}
              textTransform="uppercase"
            >
              {t('landingPage.volatilePairDescription')}
            </Typography>
            <br />
            {t('landingPage.volatilePairTax')}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default DEX;
