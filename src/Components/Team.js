import styled from 'styled-components';
import { data } from '../utils/data';
import TeamMember from './TeamMember';

/**
 * The Team Component
 * @author [Sam](https://github.com/Samm96)
 *
 * The Sindano Team
 */

const Container = styled.div`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 90px 100px;
    background-color: transparent;
`;

const Team = () => {
  return (
    <Container>
      {data.team.map((person, index) => (
        <TeamMember
          key={index}
          photo={person.image}
          name={person.name}
          pronouns={person.pronouns}
          headline={person.title}
        />
      ))}
    </Container>
  );
};

export default Team;
