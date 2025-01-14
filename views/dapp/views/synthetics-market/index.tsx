import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Container } from '@/components';
import { Box, Typography } from '@/elements';
import { useIdAccount } from '@/hooks';
import { TimesSVG } from '@/svg';

import { SyntheticsFilters, SyntheticsList } from './components';
import { useGetSyntheticMarketsSummary } from './synthetics-market.hooks';
import {
  ISyntheticMarketSummaryForm,
  SyntheticMarketSortByFilter,
} from './synthetics-market.types';
import { processSyntheticMarketSummaryData } from './synthetics-market.utils';

const SyntheticsMarket: FC = () => {
  const { register, setValue, control } = useForm<ISyntheticMarketSummaryForm>({
    defaultValues: {
      search: '',
      sortBy: SyntheticMarketSortByFilter.Default,
      onlyMinted: false,
    },
  });
  const t = useTranslations();
  const { chainId, account } = useIdAccount();

  const { error, data } = useGetSyntheticMarketsSummary(account, chainId);

  const { markets, loading } = useMemo(
    () => processSyntheticMarketSummaryData(chainId, data),
    [chainId, account, data]
  );

  if (error)
    return (
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          mb="L"
          width="10rem"
          height="10rem"
          color="error"
          overflow="hidden"
          borderRadius="50%"
          border="0.3rem solid"
        >
          <TimesSVG
            width="100%"
            height="100%"
            maxHeight="10rem"
            maxWidth="10rem"
          />
        </Box>
        <Typography variant="title3">{t('error.generic')}</Typography>
      </Box>
    );

  return (
    <Container
      dapp
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box py="XL" width="100%">
        <Typography variant="title3" textAlign="center">
          {t('syntheticsMarket.title')}
        </Typography>
        <Typography
          variant="title4"
          mt="1rem"
          fontWeight="400"
          textAlign="center"
        >
          {t('syntheticsMarket.subTitle')}
        </Typography>
      </Box>
      <SyntheticsFilters
        control={control}
        register={register}
        setValue={setValue}
      />
      <SyntheticsList
        chainId={chainId}
        control={control}
        markets={markets}
        loading={loading}
      />
    </Container>
  );
};

export default SyntheticsMarket;
