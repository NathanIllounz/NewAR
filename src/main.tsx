import { MainLayout, SectionContainer } from 'components';
import {
  IntroSection, AboutSection, LoginSection, CreateAvatarSection, OpenCameraSection,
} from 'sections';
import { SectionIdEnum } from 'types';

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <AboutSection />,
  },
  {
    sectionId: SectionIdEnum.intro,
    component: <LoginSection />,
  },
  {
    sectionId: SectionIdEnum.openCamera,
    component: <OpenCameraSection />,
  },
  {
    sectionId: SectionIdEnum.createYourAvatar,
    component: <CreateAvatarSection />,
  },
];

export const Main: React.FC = () => {
  return (
    <MainLayout>
      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer sectionId={sectionId} key={sectionId}>
            {component}
          </SectionContainer>
        );
      })}
    </MainLayout>
  );
};
