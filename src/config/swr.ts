const swrConfig = {
  suspense: false,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  refreshInterval: 0,
  refreshWhenHidden: false,
  refreshWhenOffline: false,
  shouldRetryOnError: true,
  dedupingInterval: 2000,
  focusThrottleInterval: 5000,
  loadingTimeout: 3000,
  errorRetryInterval: 5000
}

export default swrConfig
