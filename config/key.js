const blobkeys = {
  fnUri: "https://dpl-uc3.azurewebsites.net/api/uc3-file-fn",
  blobAccountName: "wrdmstorageamit",
  blobAccountKey:
    "Em5S2KQCBfqiBhwgVGig1PgPNb4Gt3Cv8wbcsFhRBBWIjE2vkFyTSF6RYgvEyH5ikA026Hv3hya1xH8d9xAiXA==",
  connectionStr:
    "DefaultEndpointsProtocol=https;AccountName=wrdmstorageamit;AccountKey=Em5S2KQCBfqiBhwgVGig1PgPNb4Gt3Cv8wbcsFhRBBWIjE2vkFyTSF6RYgvEyH5ikA026Hv3hya1xH8d9xAiXA==;EndpointSuffix=core.windows.net",
  containerName:'firmware'
};

module.exports = {
  fnUri: "https://dpl-uc3.azurewebsites.net/api/uc3-file-fn",
  blobAccountName: "wrdmstorageamit",
  blobAccountKey:
    "Em5S2KQCBfqiBhwgVGig1PgPNb4Gt3Cv8wbcsFhRBBWIjE2vkFyTSF6RYgvEyH5ikA026Hv3hya1xH8d9xAiXA==",
  connectionStr:
    "DefaultEndpointsProtocol=https;AccountName=wrdmstorageamit;AccountKey=Em5S2KQCBfqiBhwgVGig1PgPNb4Gt3Cv8wbcsFhRBBWIjE2vkFyTSF6RYgvEyH5ikA026Hv3hya1xH8d9xAiXA==;EndpointSuffix=core.windows.net",
  containerName:'firmware',
  port: process.env.PORT || 3008
};