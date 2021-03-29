import { render, screen, fireEvent } from '@testing-library/angular';
import { IProfile } from 'src/app/core/models/user.model';
import { LayoutModule } from 'src/app/presentation/layout/layout.module';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  const dataProfile: IProfile = {
    email: 'email@mail.com',
    avatar: 'url',
    name: 'Henry',
  };
  test('should render profile after loading', async () => {
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
  // let component: ProfileComponent;
  // let fixture: ComponentFixture<ProfileComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ProfileComponent],
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProfileComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
