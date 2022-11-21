export enum GACategory {
  HeaderNavigation = 'HEADER_NAVIGATION',
  Operation = 'OPERATION',
  Wallet = 'WALLET',
  Modal = 'MODAL',
  FarmFilters = 'FARMS_FILTERS',
  VaultFilters = 'VAULTS_FILTERS',
  DineroMarketFilters = 'DINERO_FILTERS',
  SyntheticsMarketFilters = 'SYNTHETICS_FILTERS',
}

export enum GAAction {
  DesktopNavigate = 'DESKTOP_NAVIGATE',
  MobileNavigate = 'MOBILE_NAVIGATE',
  Access = 'ACCESS',
  Switch = 'SWITCH_FILTER',
  FindAndEnterPool = 'FIND_AND_ENTER_POOL',
  Deposit = 'DEPOSIT',
  Withdraw = 'WITHDRAW',
  Borrow = 'BORROW',
  Repay = 'REPAY',
  Faucet = 'FAUCET',
  SwitchNetwork = 'SWITCH_NETWORK',
  ConnectWallet = 'CONNECT_WALLET',
  AccountDetails = 'ACCOUNT_DETAILS',
  FarmDetailsCard = 'FARM_DETAILS_CARD',
  CreateToken = 'CREATE_NEW_TOKEN',
}