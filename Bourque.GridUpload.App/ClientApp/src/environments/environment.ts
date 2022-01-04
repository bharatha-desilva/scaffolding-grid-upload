// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    environmentName: 'Development',
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
        redirectUri: 'http://localhost:4200/authentication/login-callback',
        postLogoutRedirectUri: 'http://localhost:4200/authentication/logout-callback',
        silentRedirectUri: 'http://localhost:4200/silent-refresh.html',
    },
    bdsInternalApiUri: 'https://bds-azsrvc-bds-internal-api.bdsapigtwy.p.azurewebsites.net',
    gridUploadOptions: {
        gridUploadApiUri: 'https://bourque-gridupload-api-dev.azurewebsites.net',
        gridUploadRoles: {
            roles: {
                'shipper-bi-admin': ['shipper-bi.admin.navigation'],
                'shipper-bi-user': ['shipper-bi.report.navigation'],
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
