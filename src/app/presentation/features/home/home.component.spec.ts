import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';
import { HomeComponent } from './home.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ProfileComponent } from './components/profile/profile.component';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { ItemLinkComponent } from './components/item-link/item-link.component';
import { LayoutModule } from '../../layout/layout.module';
import {
  provideMock,
  Mock,
  createMock,
} from '@testing-library/angular/jest-utils';
import { HomeFacade } from 'src/app/facades/home.facade';
import { IProfile } from 'src/app/core/models/user.model';
import { of } from 'rxjs';

import * as homeSelectors from '../../../domain/store/home/home.selectors';

describe('HomeComponent', () => {
  test('should render home', async () => {
    const dataProfile: IProfile = {
      email: 'email@mail.com',
      avatar: 'url',
      name: 'Henry',
    };
    const { fixture } = await render(HomeComponent, {
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: homeSelectors.selectProfile,
              value: dataProfile,
            },
          ],
        }),
      ],
      declarations: [ProfileComponent, AddLinkComponent, ItemLinkComponent],
      imports: [LayoutModule],
    });
    const store = TestBed.inject(MockStore);
    // const app = fixture.debugElement.componentInstance;
    // app.profile$ = of(dataProfile);
    // const store = TestBed.inject(MockStore);

    expect(screen.getByText('Pasooo'));
  });
});
