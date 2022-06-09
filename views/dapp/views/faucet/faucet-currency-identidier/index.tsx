import { getAddress } from 'ethers/lib/utils';
import { find, pathOr, propEq } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { TOKENS_SVG_MAP } from '@/constants';
import { Box, Typography } from '@/elements';
import { TOKEN_SYMBOL } from '@/sdk';

import { CurrencyIdentifierProps } from '../faucet.types';

const CurrencyIdentifier: FC<CurrencyIdentifierProps> = ({
  tokens,
  control,
}) => {
  const tokenAddress = useWatch({ control, name: 'token' });

  const symbol = pathOr(
    TOKEN_SYMBOL.Unknown,
    ['symbol'],
    find(propEq('address', getAddress(tokenAddress)), tokens)
  );

  const Icon = TOKENS_SVG_MAP[symbol] ?? TOKENS_SVG_MAP[TOKEN_SYMBOL.Unknown];

  return (
    <Box display="flex" alignItems="center">
      <Icon width="1rem" />
      <Typography variant="normal" ml="M">
        {symbol}
      </Typography>
    </Box>
  );
};

export default CurrencyIdentifier;
