import { ethers } from 'ethers';
import { FC, useMemo } from 'react';
import { useWatch } from 'react-hook-form';

import { Box } from '@/elements';
import { isSameAddress } from '@/utils';

import { MAILMarketSearchBarResultsProps } from '../../mail-market.types';
import SearchItemWrapper from './mail-market-search-item-wrapper';

const MAILMarketSearchBarResults: FC<MAILMarketSearchBarResultsProps> = ({
  control,
  allMarkets,
  addLocalAsset,
}) => {
  const query = useWatch({ control, name: 'search' });

  const trimmedQuery = useMemo(() => query.trim(), [query]);

  const doesMarketExist = useMemo(
    () =>
      allMarkets.some((market) =>
        ethers.utils.isAddress(trimmedQuery)
          ? isSameAddress(trimmedQuery, market.market) ||
            isSameAddress(trimmedQuery, market.token)
          : market.name.toLowerCase().startsWith(trimmedQuery.toLowerCase()) ||
            market.symbol
              .toLowerCase()
              .startsWith(trimmedQuery.toLowerCase()) ||
            market.symbol.toLowerCase().includes(query.trim().toLowerCase()) ||
            market.name.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [trimmedQuery, allMarkets]
  );

  if (doesMarketExist || !trimmedQuery) return null;

  if (!ethers.utils.isAddress(trimmedQuery))
    return (
      <Box
        p="XL"
        left="0"
        top="5.5rem"
        zIndex={1}
        width="100%"
        boxShadow="0 0 0.6rem #0003"
        bg="foreground"
        borderRadius="L"
        position="absolute"
      >
        Market not found: Please write a token address to find or create a new
        market
      </Box>
    );

  return (
    <Box
      p="XL"
      left="0"
      top="5.5rem"
      zIndex={1}
      width="100%"
      boxShadow="0 0 0.6rem #0003"
      bg="foreground"
      borderRadius="L"
      position="absolute"
    >
      <SearchItemWrapper
        addLocalAsset={addLocalAsset}
        address={ethers.utils.getAddress(trimmedQuery)}
      />
    </Box>
  );
};

export default MAILMarketSearchBarResults;