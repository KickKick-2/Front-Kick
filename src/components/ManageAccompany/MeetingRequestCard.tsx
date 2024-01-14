import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';

interface MeetingRequest {
  id: number;
  requesterName: string;
}
interface MeetingRequestCardProps {
  request: MeetingRequest;
  onAccept: (id: number) => void;
  onReject: (id: number) => void;
}

const MeetingRequestCard: React.FC<MeetingRequestCardProps> = ({
  request,
  onAccept,
  onReject,
}) => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    onAccept(request.id);
  };

  const handleReject = () => {
    setRejected(true);
    onReject(request.id);
  };

  return (
    <RequestCard>
      <Profile>
        <ProfileImg>
          <BsFillPersonFill size='29' />
        </ProfileImg>
        <Name>{request.requesterName}</Name>
      </Profile>
      {!accepted && !rejected && (
        <Btn>
          <Agree onClick={handleAccept}>수락</Agree>
          <Disagree onClick={handleReject}>거절</Disagree>
        </Btn>
      )}
      {accepted && (
        <Btn>
          <p>참여 완료</p>
        </Btn>
      )}
      {rejected && (
        <Btn>
          <p>참여 거절</p>
        </Btn>
      )}
    </RequestCard>
  );
};
const RequestCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const ProfileImg = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #898989;
`;
const Name = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
  max-height: 34px;
  padding: 8px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid black;
  border-radius: 12px;
  font-size: 14px;
`;
const Agree = styled.div`
  padding: 8px 20px;
  font-size: 9px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #5297ff;
`;
const Disagree = styled.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #f25a5a;
`;
const Btn = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export default MeetingRequestCard;
