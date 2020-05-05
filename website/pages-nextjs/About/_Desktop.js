import styled from 'styled-components'

import Slogan from '@ddanailov/styled/Slogan'

import AboutMe from '@about/Components/AboutMe'
import Roles from '@about/Components/Roles'

// Heidi
import HeidiLetter from '@about/Components/Testimonials/Heidi/Letter'
import HeidiInfo from '@about/Components/Testimonials/Heidi/Info'
import HeidiAvatar from '@about/Components/Testimonials/Heidi/Avatar'

// Henry
import HenryLetter from '@about/Components/Testimonials/Henry/Letter'
import HenryInfo from '@about/Components/Testimonials/Henry/Info'
import HenryAvatar from '@about/Components/Testimonials/Henry/Avatar'

// Ivelin
import IvelinLetter from '@about/Components/Testimonials/Ivelin/Letter'
import IvelinInfo from '@about/Components/Testimonials/Ivelin/Info'
import IvelinAvatar from '@about/Components/Testimonials/Ivelin/Avatar'

// Mo
import MoLetter from '@about/Components/Testimonials/Mo/Letter'
import MoInfo from '@about/Components/Testimonials/Mo/Info'
import MoAvatar from '@about/Components/Testimonials/Mo/Avatar'

// Ashton
import AshtonLetter from '@about/Components/Testimonials/Ashton/Letter'
import AshtonInfo from '@about/Components/Testimonials/Ashton/Info'

// Hristo
import HristoAvatar from '@about/Components/Testimonials/Hristo/Avatar'
import HristoLetter from '@about/Components/Testimonials/Hristo/Letter'
import HristoInfo from '@about/Components/Testimonials/Hristo/Info'

// Tsvetan
import TsvetanAvatar from '@about/Components/Testimonials/Tsvetan/Avatar'
import TsvetanLetter from '@about/Components/Testimonials/Tsvetan/Letter'
import TsvetanInfo from '@about/Components/Testimonials/Tsvetan/Info'

// Vladimir
import VladimirAvatar from '@about/Components/Testimonials/Vladimir/Avatar'
import VladimirLetter from '@about/Components/Testimonials/Vladimir/Letter'
import VladimirInfo from '@about/Components/Testimonials/Vladimir/Info'

const TestimonialBody = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  margin: 1rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const TestimonialBodyCenter = styled(TestimonialBody)`
  align-items: center;
`

const RecommendationBody = styled.div`
  position: relative;

  text-align: justify;

  margin-left: 2rem;

  @media (max-width: 1024px) {
    margin-left: 0rem;
  }
`

const AboutPage = () => (
  <>
    <AboutMe />
    <Roles />

    <Slogan>Testimonials and Recommendations</Slogan>

    <TestimonialBody>
      <HeidiAvatar />

      <RecommendationBody>
        <HeidiLetter />

        <HeidiInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBodyCenter>
      <HenryAvatar />

      <RecommendationBody>
        <HenryLetter />
        <HenryInfo />
      </RecommendationBody>
    </TestimonialBodyCenter>

    <TestimonialBodyCenter>
      <IvelinAvatar />

      <RecommendationBody>
        <IvelinLetter />
        <IvelinInfo />
      </RecommendationBody>
    </TestimonialBodyCenter>

    <TestimonialBodyCenter>
      <MoAvatar />

      <RecommendationBody>
        <MoLetter />
        <MoInfo />
      </RecommendationBody>
    </TestimonialBodyCenter>

    <section>
      <AshtonLetter />
      <AshtonInfo />
    </section>

    <TestimonialBody>
      <HristoAvatar />
      <RecommendationBody>
        <HristoLetter />

        <HristoInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <TsvetanAvatar />

      <RecommendationBody>
        <TsvetanLetter />
        <TsvetanInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <VladimirAvatar />
      <RecommendationBody>
        <VladimirLetter />
        <VladimirInfo />
      </RecommendationBody>
    </TestimonialBody>
  </>
)

export default AboutPage