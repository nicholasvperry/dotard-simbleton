//Compile HTML information for index

export const Provider = (providerObject => {
    return `
    <section class="provider">
    <h2 class="companyName">${providerObject.companyName}</h2>
    <div class="contactInformation">
    ${providerObject.addressFullStreet}
    ${providerObject.addressCity}, ${providerObject.addressStateCode} ${providerObject.addressZipCode}
    </div>
</section>
    `
})