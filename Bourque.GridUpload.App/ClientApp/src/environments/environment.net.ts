// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    environmentName: '.NET Development',
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
        redirectUri: 'https://localhost:44388/authentication/login-callback',
        postLogoutRedirectUri: 'https://localhost:44388/authentication/logout-callback',
        silentRedirectUri: 'https://localhost:44388/silent-refresh.html',
    },
    bdsInternalApiUri: 'https://bds-azsrvc-bds-internal-api.bdsapigtwy.p.azurewebsites.net',
    gridUploadOptions: {
        gridUploadApiUri: 'https://localhost:7060',
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
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
