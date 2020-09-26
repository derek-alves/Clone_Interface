import React from 'react';
import { Container,Main,LeftSide,RightSide, Repos } from './styles';

import RepoCard from '../../components/RepoCard';

import ProfileData from '../../components/ProfileData';
import Repo from '../Repo';

const Profile: React.FC = () => {
  return (
        <Container>
          <Main>
            <LeftSide>
                <ProfileData
                  name={"Derek Alves"}
                  username={"derek-alves"}
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
                <Repo>
                    <h2>Random repos</h2>

                    <div>
                      {
                        [1,2,3,4,5,6].map(n =>(
                          <RepoCard
                              key={n}
                              username={'derek-alves'}
                              reponame={'colneUi'}
                              description={'Contains all of my clones'}
                              language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                              stars={8}
                              forks={4}
                          />
                        ))
                      }
                    </div>
                </Repo>
            </RightSide>
          </Main>
        </Container>
  );
}

export default Profile;