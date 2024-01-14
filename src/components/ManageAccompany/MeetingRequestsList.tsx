import React from 'react';
import styled from 'styled-components';
import MeetingRequestCard from './MeetingRequestCard';
interface MeetingRequest {
  id: number;
  requesterName: string;
}

interface MeetingRequestsListProps {
  requests: MeetingRequest[];
  onAccept: (id: number) => void;
  onReject: (id: number) => void;
}

const MeetingRequestsList: React.FC<MeetingRequestsListProps> = ({
  requests,
  onAccept,
  onReject,
}) => {
  return (
    <List className='meeting-requests-list'>
      {requests.map((request) => (
        <MeetingRequestCard
          key={request.id}
          request={request}
          onAccept={onAccept}
          onReject={onReject}
        />
      ))}
    </List>
  );
};
const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  width: 100%;
`;
export default MeetingRequestsList;
