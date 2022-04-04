import Link from 'next/link';
import { FC } from 'react';

import { SOCIAL_MEDIAS } from '@/constants/social-media.data';
import { Box, Dropdown, Typography } from '@/elements';
import { BarsSVG, GitBookSVG } from '@/svg';

const MobileMenu: FC = () => (
  <Box display={['block', 'block', 'none']}>
    <Dropdown
      buttonMode
      mode="menu"
      header="FOLLOW US:"
      title={
        <Box
          width="1.6rem"
          height="1.6rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BarsSVG width="1rem" height="1rem" />
        </Box>
      }
      data={[
        ...SOCIAL_MEDIAS,
        {
          title: 'GitBook',
          Logo: GitBookSVG,
          link: 'https://docs.interestprotocol.com/',
        },
      ].map(({ title, link }) => ({
        value: title,
        displayOption: (
          <Link href={link}>
            <Typography
              px="M"
              py="L"
              width="100%"
              variant="normal"
              textAlign="center"
              textTransform="uppercase"
            >
              {title}
            </Typography>
          </Link>
        ),
      }))}
    />
  </Box>
);

export default MobileMenu;