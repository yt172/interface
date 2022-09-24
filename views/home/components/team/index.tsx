<<<<<<< HEAD
import { useTranslations } from 'next-intl';
import { toPairs } from 'ramda';
=======
import { always, toPairs } from 'ramda';
>>>>>>> 0e0825b (🔥 feat: team section (#129))
import { FC } from 'react';
import { v4 } from 'uuid';

import { Container } from '@/components';
import { Box, Typography } from '@/elements';
import { LogoSVG } from '@/svg';

import { SOCIAL_SVG, TEAM_MEMBERS } from './team.data';
import { FlipMemberCard, Image } from './team.styles';

<<<<<<< HEAD
const Team: FC = () => {
  const t = useTranslations();

  return (
    <Box bg="foreground">
      <Container as="section" py={['XL', 'XXL']} textAlign="center">
        <Typography
          as="h2"
          variant="normal"
          fontWeight="900"
          textAlign="center"
          lineHeight="4.876rem"
          fontSize={['2.75rem', '2.75rem', '4rem', '4rem']}
        >
          {t('landingPage.teamTitle')}
        </Typography>
        <Typography
          my="XL"
          mx="auto"
          maxWidth="70ch"
          variant="normal"
          pb={['L', 'XL']}
        >
          {t('landingPage.teamDescription')}
        </Typography>
        <Box
          pt="XL"
          display="grid"
          mx={['L', 'XXXL']}
          gridRowGap={['2rem', '5rem']}
          gridColumnGap={['3rem', '3rem', '3rem', '7rem']}
          gridTemplateColumns={[
            '1fr',
            '1fr 1fr',
            '1fr 1fr',
            '1fr 1fr',
            '1fr 1fr 1fr',
          ]}
        >
          {TEAM_MEMBERS.map(({ name, role, social, image, bio, depsBio }) => (
            <Box key={v4()} as="article">
              <FlipMemberCard height={['23rem', '22rem']}>
                <Box
                  width="100%"
                  height="100%"
                  position="relative"
                  className="flipWrapper"
                >
                  <Box
                    mb="L"
                    height="100%"
                    overflow="hidden"
                    position="relative"
                    className="flipImage"
                  >
                    <Box as="picture">
                      <source
                        type="image/webp"
                        srcSet={`/images/web/team/${image}.webp 800w, /images/web/team/${image}.webp`}
                      />
                      <source
                        type="image/png"
                        srcSet={`/images/min/team/${image}.png 800w, /images/min/team/${image}.png`}
                      />
                      <Image
                        alt={name}
                        width="100%"
                        height="100%"
                        loading="lazy"
                        decoding="async"
                        src={`/images/min/team/${image}.png`}
                      />
                    </Box>
                    <Box
                      p="L"
                      pt="XXL"
                      pl="XXL"
                      right="0"
                      bottom="0"
                      width="8rem"
                      position="absolute"
                      backgroundImage="linear-gradient(135deg, #0000 45%, #000A)"
                    >
                      <LogoSVG width="100%" />
                    </Box>
                  </Box>
                  <Box
                    px="L"
                    py="XL"
                    height="100%"
                    display="flex"
                    bg="foreground"
                    overflow="hidden"
                    alignItems="center"
                    className="flipBio"
                    flexDirection="column"
                    border="0.15rem solid"
                    borderColor="outline"
                    borderBottom="0.5rem solid"
                    borderBottomColor="accent"
                  >
                    <Box width="4rem">
                      <LogoSVG width="100%" />
                    </Box>
                    <Typography
                      mt="L"
                      variant="normal"
                      lineHeight="1.6"
                      textAlign="left"
                      fontSize="0.9rem"
                    >
                      {t(bio, depsBio)}
                    </Typography>
                  </Box>
                </Box>
              </FlipMemberCard>
              <Typography
                as="h3"
                variant="normal"
                fontWeight="bold"
                letterSpacing="1.5px"
                textTransform="uppercase"
              >
                {name}
              </Typography>
              <Typography variant="normal">{t(role)}</Typography>
              <Box mt="M">
                {toPairs(social).map(([network, link]) => {
                  const Icon = SOCIAL_SVG[network];
                  return (
                    <a href={link} target="_blank" rel="noreferrer" key={v4()}>
                      <Box
                        mx="M"
                        as="span"
                        width="1.6rem"
                        display="inline-block"
                        hover={{
                          color: 'accent',
                        }}
                      >
                        <Icon width="100%" />
                      </Box>
                    </a>
                  );
                })}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
=======
const Team: FC = always(
  <Box bg="foreground">
    <Container as="section" py={['XL', 'XXL']} textAlign="center">
      <Typography
        as="h2"
        variant="normal"
        fontWeight="900"
        textAlign="center"
        lineHeight="4.876rem"
        fontSize={['2.75rem', '2.75rem', '4rem', '4rem']}
      >
        Meet Our Team
      </Typography>
      <Typography
        my="XL"
        mx="auto"
        maxWidth="70ch"
        variant="normal"
        pb={['L', 'XL']}
      >
        We are a team of techno-entrepreneurs based in Europe with a combined
        experience of 10 years in crypto. We prioritize security above all else.
        We prefer to ship slow but secure as opposed to Facebook&apos;s mantra
        of Move fast and break things.
      </Typography>
      <Box
        pt="XL"
        display="grid"
        mx={['L', 'XXXL']}
        gridRowGap={['2rem', '5rem']}
        gridColumnGap={['3rem', '3rem', '3rem', '7rem']}
        gridTemplateColumns={[
          '1fr',
          '1fr 1fr',
          '1fr 1fr',
          '1fr 1fr',
          '1fr 1fr 1fr',
        ]}
      >
        {TEAM_MEMBERS.map(({ name, role, social, image, bio }) => (
          <Box key={v4()} as="article">
            <FlipMemberCard height={['23rem', '22rem']}>
              <Box
                width="100%"
                height="100%"
                position="relative"
                className="flipWrapper"
              >
                <Box
                  mb="L"
                  height="100%"
                  overflow="hidden"
                  position="relative"
                  className="flipImage"
                >
                  <Box as="picture">
                    <source
                      type="image/webp"
                      srcSet={`/images/web/team/${image}.webp 800w, /images/web/team/${image}.webp`}
                    />
                    <source
                      type="image/png"
                      srcSet={`/images/min/team/${image}.png 800w, /images/min/team/${image}.png`}
                    />
                    <Image
                      alt={name}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      decoding="async"
                      src={`/images/min/team/${image}.png`}
                    />
                  </Box>
                  <Box
                    p="L"
                    pt="XXL"
                    pl="XXL"
                    right="0"
                    bottom="0"
                    width="8rem"
                    position="absolute"
                    backgroundImage="linear-gradient(135deg, #0000 45%, #000A)"
                  >
                    <LogoSVG width="100%" />
                  </Box>
                </Box>
                <Box
                  px="L"
                  py="XL"
                  height="100%"
                  display="flex"
                  bg="foreground"
                  overflow="hidden"
                  alignItems="center"
                  className="flipBio"
                  flexDirection="column"
                  border="0.15rem solid"
                  borderColor="outline"
                  borderBottom="0.5rem solid"
                  borderBottomColor="accent"
                >
                  <Box width="4rem">
                    <LogoSVG width="100%" />
                  </Box>
                  <Typography
                    mt="L"
                    variant="normal"
                    lineHeight="1.6"
                    textAlign="left"
                    fontSize="0.9rem"
                  >
                    {bio}
                  </Typography>
                </Box>
              </Box>
            </FlipMemberCard>
            <Typography
              as="h3"
              variant="normal"
              fontWeight="bold"
              letterSpacing="1.5px"
              textTransform="uppercase"
            >
              {name}
            </Typography>
            <Typography variant="normal">{role}</Typography>
            <Box mt="M">
              {toPairs(social).map(([network, link]) => {
                const Icon = SOCIAL_SVG[network];
                return (
                  <a href={link} target="_blank" rel="noreferrer" key={v4()}>
                    <Box
                      mx="M"
                      as="span"
                      width="1.6rem"
                      display="inline-block"
                      hover={{
                        color: 'accent',
                      }}
                    >
                      <Icon width="100%" />
                    </Box>
                  </a>
                );
              })}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

>>>>>>> 0e0825b (🔥 feat: team section (#129))
export default Team;