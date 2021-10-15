import { useProviders } from "./BusinessProvider";
import { Provider } from "./Business";


export const  ProviderList = () => {
    const targetBusinessList = document.querySelector("#BusinessList")

    const allProviders = useProviders()

    let providersHTMLRepresentations = ""

    for (const singleProviderObject of allProviders) {
        providersHTMLRepresentations += Provider(singleProviderObject)
    }

    providerContainer.innerHTML += `<div>${providersHTMLRepresentations}`
    

}