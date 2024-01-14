import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import TitleName from './TitleName';
import ContentInput from './ContentInput';
import FilterBox from '@/components/HashTag/FilterBox';
import { customMedia } from '@/util/GlobalStyle';

type Props = {};

const Detailinfo_2 = (props: Props) => {
  return (
    <Form>
      <SettingBox>
        {/* <Thumbnail></Thumbnail> */}
        <TitleName></TitleName>
        <ContentInput></ContentInput>
        <FilterBox></FilterBox>
      </SettingBox>
    </Form>
  );
};

export default Detailinfo_2;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SettingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 30%;
  ${customMedia.lessThan('mobile')`
		width:100%;
	`}
`;
