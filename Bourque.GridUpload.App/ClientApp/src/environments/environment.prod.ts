export const environment = {
    production: true,
    environmentName: 'Production',
    authOptions: {
        applicationName: 'shipperbi-app',
        authorityUri: 'https://auth.railcl.com',
        scope: [
            'shipperbi-api',
            'openid',
            'profile',
            'bds-app',
            'bds-internal-api',
            'bds-internal-api.read-applications',
            'bds-internal-api.read-customers',
            'bds-internal-api.read-users',
        ],
        redirectUri: 'https://shipperbi-app-v2.azurewebsites.net/authentication/login-callback',
        postLogoutRedirectUri:
            'https://shipperbi-app-v2.azurewebsites.net/authentication/logout-callback',
        silentRedirectUri: 'https://shipperbi-app-v2.azurewebsites.net/silent-refresh.html',
    },
    bdsInternalApiUri: 'https://bds-azsrvc-bds-internal-api.bdsapigtwy.p.azurewebsites.net',
    gridUploadOptions: {
        gridUploadApiUri: 'https://bourque-gridupload-api-dev.azurewebsites.net',
        gridUploadRoles: {
            roles: {
                'shipper-bi-admin': [
                    'grid-upload.template.management',
                    'grid-upload.template.upload',
                ],
                'shipper-bi-user': ['grid-upload.template.upload'],
            },
        },
    },
};
