import { TestBed } from '@angular/core/testing';

import { AccessService } from './access.service';
import { GridUploadOptions } from '../models/grid-upload-options';
import { AuthorizeService } from '@bds/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Role } from '../models/role';
import { Privilege } from '../models/privilege';

class MockAuthorizeService {
    getAccessToken(): Observable<string> {
        return of(
            'eyJhbGciOiJSUzI1NiIsImtpZCI6IkJBQ0Y1NUU2RTM3NEExMEY3MkQ1M0FEOEFDMjFERUQzNDk0NzIzRTgiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJ1czlWNXVOMG9ROXkxVHJZckNIZTAwbEhJLWcifQ.eyJuYmYiOjE2MzY5NzIzOTcsImV4cCI6MTYzNjk3NTk5NywiaXNzIjoiaHR0cHM6Ly9hdXRoLnJhaWxjbC5jb20iLCJhdWQiOiJzaGlwcGVyYmktYXBpIiwiY2xpZW50X2lkIjoic2hpcHBlcmJpLWFwcCIsInN1YiI6IjkxNmU3MDQ5LTA3MTQtNDI4Yy04OWFmLTY0OWU4YzcyZjc1MiIsImF1dGhfdGltZSI6MTYzNjk3MjM5MywiaWRwIjoibG9jYWwiLCJyb2xlIjoic2hpcHBlci1iaS1hZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRoYXJhbmdhaCIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJzaGlwcGVyYmktYXBpIl0sImFtciI6WyJwd2QiXX0.M1NlNUH7WLN6mc-k0fCxz4F-IW7M7e7VEzxYhgGo4wV11VMQL2g2P1e0y6hYBYxusCXlR5Gxe_eID0uMfS_dn2TF_FfsYYYFuWvH-Il5a73tASlD3WE609QrLJ9fEgihoQAZMRFU1ZHRwgC0-gAbQYH-iRGhPttqSJgmIhW5RNUOoUqPl-sUDH5V7Wx7ywy1QDV5gR8-DR7d7jMnmm2QuMotv_Xl0UBUuDMK_5qa1bo_CrAwavLX7Fh6cajSO5Djp3F2apIXl2VE7-w5WdFWv24emGVjEqVquDo3fUuZKzp9Slt6fxLBOcTEvYty6ey2ty0Rn0uO76tphlVS8GtWXA',
        );
    }

    isAuthenticated(): Observable<boolean> {
        return of(true);
    }
}

const hasPrivilege = Privilege.REPORT_LIST;
const hasNoPrivilege = Privilege.REPORT_CREATE;

describe('AccessService', () => {
    let service: AccessService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                {
                    provide: AuthorizeService,
                    useValue: new MockAuthorizeService(),
                },
                {
                    provide: GridUploadOptions,
                    useValue: {
                        shipperBiApiUri: 'http://localhost:8080',
                        shipperBiRoles: {
                            roles: {
                                'shipper-bi-admin': [hasPrivilege],
                                'shipper-bi-user': [
                                    'shipper-bi.report.navigation',
                                    'shipper-bi.report.read',
                                ],
                            },
                        },
                    },
                },
                AccessService,
            ],
        });
        service = TestBed.inject(AccessService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('role should be decoded', (done) => {
        expect(
            service.decodeRole().subscribe((r: Role) => {
                expect(r).toBe('shipper-bi-admin');
                done();
            }),
        );
    });

    it('should have privilege', (done) => {
        expect(
            service.hasPrivilege(hasPrivilege).subscribe((r: boolean) => {
                expect(r).toBeTruthy();
                done();
            }),
        );
    });

    it('should not have privilege', (done) => {
        expect(
            service.hasPrivilege(hasNoPrivilege).subscribe((r: boolean) => {
                expect(r).toBeFalsy();
                done();
            }),
        );
    });
});
