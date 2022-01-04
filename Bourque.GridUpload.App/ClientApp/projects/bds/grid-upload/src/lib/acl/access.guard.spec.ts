import { TestBed } from '@angular/core/testing';

import { AccessGuard } from './access.guard';
import { AccessService } from './access.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Privilege } from '../models/privilege';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

const hasPrivilege = Privilege.REPORT_LIST;
const hasNoPrivilege = Privilege.REPORT_CREATE;

class MockAccessService {
    hasPrivilege(p: Privilege) {
        return hasPrivilege === p ? of(true) : of(false);
    }
}

describe('AccessGuard', () => {
    let guard: AccessGuard;
    let route: ActivatedRoute;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                {
                    provide: AccessService,
                    useValue: new MockAccessService(),
                },
                {
                    provide: Router,
                    useValue: {
                        navigate() {
                            /* eslint-disable no-eval */
                        },
                    },
                },
                {
                    provide: ActivatedRoute,
                    useValue: { snapshot: { data: { targetPrivilege: hasPrivilege } } },
                },
                AccessGuard,
            ],
        });
        guard = TestBed.inject(AccessGuard);
        route = TestBed.inject(ActivatedRoute);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });

    it('should activate', (done) => {
        const obs$ = guard.canActivate(route.snapshot);
        expect(
            obs$.subscribe((r: boolean) => {
                expect(r).toBeTruthy();
                done();
            }),
        );
    });

    it('should not activate', (done) => {
        route.snapshot.data.targetPrivilege = hasNoPrivilege;
        const obs$ = guard.canActivate(route.snapshot);
        expect(
            obs$.subscribe((r: boolean) => {
                expect(r).toBeFalsy();
                done();
            }),
        );
    });

    it('should activate child', (done) => {
        const obs$ = guard.canActivateChild(route.snapshot);
        expect(
            obs$.subscribe((r: boolean) => {
                expect(r).toBeTruthy();
                done();
            }),
        );
    });

    it('should not activate child', (done) => {
        route.snapshot.data.targetPrivilege = hasNoPrivilege;
        const obs$ = guard.canActivateChild(route.snapshot);
        expect(
            obs$.subscribe((r: boolean) => {
                expect(r).toBeFalsy();
                done();
            }),
        );
    });
});
