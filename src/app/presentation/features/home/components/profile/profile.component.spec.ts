import { render, screen, fireEvent } from '@testing-library/angular';
import { IProfile } from 'src/app/core/models/user.model';
import { LayoutModule } from 'src/app/presentation/layout/layout.module';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  const dataProfile: IProfile = {
    email: 'email@mail.com',
    avatar: 'url.com',
    name: 'Henry',
  };
  test('should render profile', async () => {
    await render(ProfileComponent, {
      imports: [LayoutModule],
      componentProperties: {
        profile: dataProfile,
        isLoading: false,
      },
    });

    expect(screen.getByText('Henry'));
    expect(screen.getByText('email@mail.com'));
  });
  // test('should image have src input url avatar', async () => {
  //   await render(ProfileComponent, {
  //     imports: [LayoutModule],
  //     componentProperties: {
  //       profile: dataProfile,
  //       isLoading: false,
  //     },
  //   });
  //   const image = screen.getByRole('img');
  //   expect(image.textContent).toBe('url.com');
  // });
});
