import PlaceCard from '@/components/CreateRoom/Step/SelectCard/PlaceCard';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AccompanyPostReal } from '@/lib/interface';
import { BASE_URL } from '@/config';
import {
  teamidConvertStadium,
  teamidConverttoTeamName,
} from '@/util/teamnameConvertImg';
import { convertStringToArray, cutData } from '@/util/compareDate';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { getCookie } from '@/util/cookieFn';
const token = getCookie('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
const FindAccompanyDetail = () => {
  const navigate = useNavigate();
  const [btnclicknumber, setbtnclicknumber] = useState<number>(0);
  const [boardId, setboardId] = useState<number>(0);
  const [userID, setuserID] = useState<string>('');
  const [isAccept, setisAccept] = useState<number>();
  const id = useSelector((state: RootState) => state.auth.id);
  const [recruitDetailData, setrecruitDetailData] =
    useState<AccompanyPostReal>();

  const { recruitment_board_id } = useParams() as {
    recruitment_board_id: string;
  };
  const [userState, setuserState] = useState<string>('신청');
  useEffect(() => {
    if (recruitDetailData?.hostId === id) {
      setuserState('모집중');
    }

    for (const key in recruitDetailData?.applyingUserIdList) {
      if (recruitDetailData?.applyingUserIdList.hasOwnProperty(key)) {
        const user = recruitDetailData?.applyingUserIdList[key];
        if (user.user_id === id) {
          setuserState('신청완료');
        }
      }
    }
    for (const key in recruitDetailData?.appliedUserIdList) {
      if (recruitDetailData?.appliedUserIdList.hasOwnProperty(key)) {
        const user = recruitDetailData?.appliedUserIdList[key];
        if (user.user_id === id) {
          setuserState('참여완료');
        }
      }
    }
  }, [recruitDetailData, id]);
  const ifBtnClick = (boardId: number, userID: string, isAccept: number) => {
    setboardId(boardId);
    setuserID(userID);
    setisAccept(isAccept);
    setbtnclicknumber(isAccept + 1);
    setTimeout(() => {
      patchUserApply();
    }, 100);
  };
  const patchUserApply = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/api/my-recruitment/?recruitment_board_id=${boardId}&applying_user_id=${userID}&is_accept=${isAccept}`,
        {
          method: 'PATCH',
          headers: headers,
        },
      );
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${BASE_URL}/api/recruitment/?recruitment_board_id=${recruitment_board_id}`,
          {
            method: 'get',
          },
        );
        const data = await res.json();
        setrecruitDetailData(data);
      } catch (Error) {
        console.error('Error:', Error);
      }
    }
    fetchData();
  }, [btnclicknumber]);
  const tagList = recruitDetailData?.tagList as string;

  const applyBtnClick = async () => {
    try {
      if (recruitDetailData?.hostId !== id && userState === '신청') {
        const res = await fetch(
          `${BASE_URL}/api/recruitment/?recruitment_board_id=${recruitment_board_id}`,
          {
            method: 'PATCH',
            headers: headers,
          },
        );
        const data = await res.json();
        if (data) {
          toast.success('🤝 동행 신청 완료!');
          navigate('/');
        }
      } else if (userState === '모집중') {
        toast.warning('본인의 동행에는 신청할 수 없습니다.');
      } else {
        toast.warning('이미 신청한 동행입니다.');
      }
    } catch (Error) {
      toast.error('동행 신청 실패!');
    }
  };
  // console.log(recruitDetailData);

  return id !== recruitDetailData?.hostId ? (
    <Form>
      {/* <ImgBox>
        <IMG
          src={recruitDetailData?.thumbnail}
          alt='선택한 배경 사진이 없습니다.(No Image)'
        />
      </ImgBox> */}
      <Title>{recruitDetailData?.title}</Title>
      <Box>
        <TitleText>🔥 매치 정보</TitleText>
        <MatchInfo>
          <FlexContainer>
            <FlexContainerLeft>
              <FlexText>
                <FlexItem>{cutData(recruitDetailData?.createdDate)}</FlexItem>
              </FlexText>
              <FlexText>
                <FlexItem>
                  {teamidConvertStadium(recruitDetailData?.TeamId)}
                </FlexItem>
              </FlexText>
            </FlexContainerLeft>
            <FlexContainerRight>
              <Text>
                {' '}
                {teamidConverttoTeamName(recruitDetailData?.TeamId)} vs{' '}
                {teamidConverttoTeamName(recruitDetailData?.opponentTeamId)}{' '}
              </Text>
            </FlexContainerRight>
          </FlexContainer>
        </MatchInfo>
      </Box>
      <Box>
        <TitleText>🔥 동행 정보</TitleText>
        <JoinInfo>
          <FlexContainer>
            <FlexContainerLeft>
              <FlexText>
                <Text>희망 인원 </Text>
                <Text>
                  {' '}
                  {recruitDetailData?.minNum} 명 ~ {recruitDetailData?.maxNum}{' '}
                  명
                </Text>
              </FlexText>
            </FlexContainerLeft>
            <FlexContainerRight>
              <Text>
                {' '}
                동행 장소 {recruitDetailData?.meetingPlace}{' '}
                {recruitDetailData?.detailMeetingPlace}
              </Text>
              <Text> 동행 기간 {recruitDetailData?.term} </Text>
            </FlexContainerRight>
          </FlexContainer>
        </JoinInfo>
      </Box>
      <Box>
        <TitleText>🔥 태그 정보</TitleText>
        <TagInfo>
          {convertStringToArray(tagList)?.map((tagItem: any, index: number) => (
            <TagWrapper key={index}>{tagItem}</TagWrapper>
          ))}
        </TagInfo>
      </Box>
      <Box>
        <TitleText>🔥 카드 정보</TitleText>
        <CardInfo>
          <ScrollContainer>
            <CardContainer>
              <PlaceCard
                index={0}
                ischk={false}
                list={recruitDetailData?.tourCardIdList.accommodation}
              />

              <PlaceCard
                index={1}
                ischk={false}
                list={recruitDetailData?.tourCardIdList.restaurant}
              />

              <PlaceCard
                index={2}
                ischk={false}
                list={recruitDetailData?.tourCardIdList.attraction}
              />
            </CardContainer>
          </ScrollContainer>
        </CardInfo>
        <Content>{recruitDetailData?.content}</Content>
      </Box>
      {id ? (
        <ApplyBtn onClick={() => applyBtnClick()}>{userState}</ApplyBtn>
      ) : (
        <div>
          <ApplyBtn onClick={() => toast.warning('로그인을 해주세요!')}>
            신청
          </ApplyBtn>
        </div>
      )}
    </Form>
  ) : (
    <Form>
      <Title>{recruitDetailData?.title}</Title>
      <AcceptContainer>
        <h1>
          동행 신청 인원{' '}
          {recruitDetailData?.applyingUserIdList &&
            Object.values(recruitDetailData?.applyingUserIdList).length}
          /{recruitDetailData?.maxNum} 예약 인원{' '}
          {Object.values(recruitDetailData?.appliedUserIdList).length}
        </h1>
        <List>
          {Object.values(recruitDetailData?.applyingUserIdList).map(
            (request, idx) => (
              <RequestCard key={idx}>
                <Profile>
                  <ProfileImg>
                    <BsFillPersonFill size='29' />
                  </ProfileImg>
                  <Name>{request.user_id}</Name>
                </Profile>

                <Btn>
                  <Agree
                    onClick={() =>
                      ifBtnClick(
                        recruitDetailData?.recruitmentBoardId,
                        request.user_id,
                        0,
                      )
                    }
                  >
                    수락
                  </Agree>
                  <Disagree
                    onClick={() =>
                      ifBtnClick(
                        recruitDetailData?.recruitmentBoardId,
                        request.user_id,
                        1,
                      )
                    }
                  >
                    거절
                  </Disagree>
                </Btn>
                {/* 
                <Btn>
                  <p>참여 완료</p>
                </Btn>

                <Btn>
                  <p>참여 거절</p>
                </Btn> */}
              </RequestCard>
            ),
          )}
        </List>
      </AcceptContainer>
      <Box>
        <TitleText>🔥 매치 정보</TitleText>
        <MatchInfo>
          <FlexContainer>
            <FlexContainerLeft>
              <FlexText>
                <FlexItem>{cutData(recruitDetailData?.createdDate)}</FlexItem>
              </FlexText>
              <FlexText>
                <FlexItem>
                  {teamidConvertStadium(recruitDetailData?.TeamId)}
                </FlexItem>
              </FlexText>
            </FlexContainerLeft>
            <FlexContainerRight>
              <Text>
                {' '}
                {teamidConverttoTeamName(recruitDetailData?.TeamId)} vs{' '}
                {teamidConverttoTeamName(recruitDetailData?.opponentTeamId)}{' '}
              </Text>
            </FlexContainerRight>
          </FlexContainer>
        </MatchInfo>
      </Box>
      <Box>
        <TitleText>🔥 동행 정보</TitleText>
        <JoinInfo>
          <FlexContainer>
            <FlexContainerLeft>
              <FlexText>
                <Text>희망 인원 </Text>
                <Text>
                  {' '}
                  {recruitDetailData?.minNum} 명 ~ {recruitDetailData?.maxNum}{' '}
                  명
                </Text>
              </FlexText>
            </FlexContainerLeft>
            <FlexContainerRight>
              <Text>
                {' '}
                동행 장소 {recruitDetailData?.meetingPlace}{' '}
                {recruitDetailData?.detailMeetingPlace}
              </Text>
              <Text> 동행 기간 {recruitDetailData?.term} </Text>
            </FlexContainerRight>
          </FlexContainer>
        </JoinInfo>
      </Box>
      <Box>
        <TitleText>🔥 태그 정보</TitleText>
        <TagInfo>
          {convertStringToArray(tagList)?.map((tagItem: any, index: number) => (
            <TagWrapper key={index}>{tagItem}</TagWrapper>
          ))}
        </TagInfo>
      </Box>
      <Box>
        <TitleText>🔥 카드 정보</TitleText>
        <CardInfo>
          <ScrollContainer>
            <CardContainer>
              <PlaceCard
                index={0}
                ischk={false}
                list={recruitDetailData?.tourCardIdList.accommodation}
              />

              <PlaceCard
                index={1}
                ischk={false}
                list={recruitDetailData?.tourCardIdList.restaurant}
              />

              <PlaceCard
                index={2}
                ischk={false}
                list={recruitDetailData?.tourCardIdList.attraction}
              />
            </CardContainer>
          </ScrollContainer>
        </CardInfo>
        <Content>{recruitDetailData?.content}</Content>
      </Box>
    </Form>
  );
};

export default FindAccompanyDetail;

const ApplyBtn = styled.div`
  background-color: #1f1f45;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
`;

const Form = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Box = styled.div`
  justify-content: left;
  align-items: left;
  width: 50%;
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const IMG = styled.img`
  max-width: 50%;
  max-height: 100%;
  object-fit: contain;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  word-break: break-all;
  width: 50%;
  height: auto;
  font-size: 24px;
`;

const MatchInfo = styled.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 20px;
`;

const FlexItem = styled.div`
  font-size: 14px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`;

const FlexText = styled.div`
  align-items: center;
  gap: 10px;
`;

const TitleText = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexContainerLeft = styled.div`
  justify-content: left;
  align-items: center;
`;

const FlexContainerRight = styled.div`
  gap: 15px;
`;

const JoinInfo = styled.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 20px;
`;

const TagInfo = styled.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
`;

const TagWrapper = styled.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`;

const Content = styled.div`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 18px;
  padding: 15px;
  line-height: 1.3;
  /* border: none;
  outline: none; */
`;

const CardInfo = styled.div`
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  height: 200px;
`;

const CardContainer = styled.div`
  display: flex;
`;

const ScrollContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  /* Chrome 브라우저 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 2px;
  }
`;
const AcceptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 12px;
  width: 50%;
`;
const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  width: 100%;
`;
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
  width: 120px;
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
  font-size: 12px;
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
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
