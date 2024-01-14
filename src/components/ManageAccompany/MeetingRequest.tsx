import React, { useState } from 'react';
import MeetingRequestsList from './MeetingRequestsList';
import styled from 'styled-components';
interface MeetingRequest {
  id: number;
  requesterName: string;
}
const meetingList = [
  { id: 1, requesterName: 'Alice' },
  { id: 2, requesterName: 'Bob' },
  { id: 3, requesterName: 'Kim' },
  { id: 4, requesterName: 'Son' },
  // ... add more requests
];
const MeetingRequest: React.FC = () => {
  const [meetingRequests, setMeetingRequests] =
    useState<MeetingRequest[]>(meetingList);
  const [acceptedRequests, setacceptedRequests] = useState<MeetingRequest[]>(
    [],
  );
  const handleAccept = (id: number) => {
    const requestToAccept = meetingRequests.find(
      (request) => request.id === id,
    );

    if (requestToAccept) {
      // Remove the accepted request from meetingRequests
      // const updatedMeetingRequests = meetingRequests.filter(
      //   (request) => request.id !== id,
      // );
      // setMeetingRequests(updatedMeetingRequests);

      // Add the accepted request to acceptedRequests
      setacceptedRequests((prevAcceptedRequests) => [
        ...prevAcceptedRequests,
        requestToAccept,
      ]);
    }
  };

  const handleReject = (id: number) => {
    // Handle reject logic here
  };
  return (
    <AcceptContainer>
      <h1>
        동행 신청 인원 {acceptedRequests.length}/4 예약 인원{' '}
        {meetingRequests.length}
      </h1>
      <MeetingRequestsList
        requests={meetingRequests}
        onAccept={handleAccept}
        onReject={handleReject}
      />
    </AcceptContainer>
  );
};
const AcceptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 12px;
  width: 100%;
`;
export default MeetingRequest;
