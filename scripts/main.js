import { useProviders } from "./BusinessProvider.js";

import { ProviderList } from "./BusinessList.js";

const allTheProviders = useProviders()

for(const provider of allTheProviders) {
    console.log(provider)
}

ProviderList()