import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {};

const Terms = (props: Props) => {
  const [allAgreed, setallAgreed] = useState(false);
  const [agreements, setagreements] = useState({
    termsAgreed: false,
    personalInfoAgreed: false,
    provisionAgreed: false,
    locationAgreed: false,
    overageAgreed: false,
  });
  const handleAgreementChange = (event: {
    target: { name: any; checked: any };
  }) => {
    const { name, checked } = event.target;

    setagreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
    const allChecked = Object.values({ ...agreements, [name]: checked }).every(
      (value) => value === true,
    );
    setallAgreed(allChecked);
  };
  const handleAllAgreementChange = (event: { target: { checked: any } }) => {
    const { checked } = event.target;
    setagreements((prevAgreements) =>
      Object.keys(prevAgreements).reduce(
        (newAgreements, agreementKey) => ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {} as {
          termsAgreed: boolean;
          personalInfoAgreed: boolean;
          provisionAgreed: boolean;
          locationAgreed: boolean;
          overageAgreed: boolean;
        },
      ),
    );
    setallAgreed(checked);
  };

  return (
    <TermsWrap>
      <ul>
        <li>
          <input
            type='checkbox'
            id='agree_check_all'
            name='agree_check_all'
            checked={allAgreed}
            onChange={handleAllAgreementChange}
          />
          <label htmlFor='agree_check_all'>이용약관 전체동의</label>
        </li>
        <Partition></Partition>

        <li>
          <input
            type='checkbox'
            id='agree_check_used'
            name='termsAgreed'
            checked={agreements.termsAgreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor='agree_check_used'>[필수] 이용약관 동의</label>
        </li>
        <li>
          <input
            type='checkbox'
            id='agree_check_info'
            name='personalInfoAgreed'
            checked={agreements.personalInfoAgreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor='agree_check_info'>
            [필수] 개인정보 이용 수집 동의
          </label>
        </li>
        <li>
          <input
            type='checkbox'
            id='agree_check_info_other'
            name='provisionAgreed'
            checked={agreements.provisionAgreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor='agree_check_info_other'>
            [필수] 개인정보 제 3자 제공 동의
          </label>
        </li>
        <li>
          <input
            type='checkbox'
            id='agree_check_pos'
            name='locationAgreed'
            checked={agreements.locationAgreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor='agree_check_pos'>[필수] 위치기반서비스 동의</label>
        </li>

        <li>
          <input
            type='checkbox'
            id='agree_check_age'
            name='overageAgreed'
            checked={agreements.overageAgreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor='agree_check_age'>[필수] 만 14세 이상입니다.</label>
        </li>
      </ul>
    </TermsWrap>
  );
};
const TermsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const Partition = styled.div`
  width: 360px;
  height: 1px;
  background-color: black;
`;
export default Terms;
