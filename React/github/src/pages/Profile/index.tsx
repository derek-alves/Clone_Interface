import React from 'react';
import { Container,Main,LeftSide,RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
        <Container>
          <Main>
            <LeftSide>
                <ProfileData
                  username={"derekalves"}
                  avatarUrl={"https://avatars1.githubusercontent.com/u/59737946?v=4"}
                  followers={887}
                  following={7}
                  company={'Programation'}
                  location={'Cruzeiro-SP, Brazil'}
                  email={"derek.alves@fatec.sp.gov.br"}
                  blog={'linkedin.com/in/derek-alves'}
                />
            </LeftSide>

            <RightSide>

            </RightSide>
          </Main>
        </Container>
  );
}

export default Profile;