import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { HiPlusCircle } from 'react-icons/hi';
import SelectTeamCard from '../OnboardingTeamSelect/SelectTeamCard';

interface Props {
  football_team_id: number;

  team_id: number;
  follower: number;
  logo_img_url: string;
  original_team_name: string;
  recruit_end: number;
  recruit_ing: number;
  team_color_main: string;
  team_color_sub: string;
}

const ScheduledAccompany = (props: Props) => {
  const navigate = useNavigate();
  if (props.team_id !== 0) {
    return (
      <SelectTeamCard
        football_team_id={props.football_team_id}
        team_name={props?.original_team_name}
        team_color_main={props.team_color_main}
        team_color_sub={props.team_color_sub}
        logo_img_url={props.logo_img_url}
        original_team_name={props.original_team_name}
        recruit_ing={props.recruit_ing}
        follower={props.follower}
        recruit_end={props.recruit_end}
      />
    );
  } else {
    return (
      <Form onClick={() => navigate('/signup/onboarding')}>
        <HiPlusCircle size='60' onClick={() => {}} />
      </Form>
    );
  }
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 300px;
  height: 150px;
  background: #ffffff;
  border-radius: 15px;
`;

export default ScheduledAccompany;
