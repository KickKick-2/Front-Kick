export const teamnameConvertImg = (teamname: string) => {
  switch (teamname) {
    case '강원':
      return 'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg';

    case '광주':
      return 'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg';

    case '대구':
      return 'https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg';

    case '대전':
      return 'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg';

    case '수원':
      return 'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg';

    case '수원FC':
      return 'https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg';

    case '울산':
      return 'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg';

    case '인천':
      return 'https://kickstorage.blob.core.windows.net/logo/incheon_united.svg';

    case '전북':
      return 'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg';

    case '제주':
      return 'https://kickstorage.blob.core.windows.net/logo/jeju_united.svg';

    case '포항':
      return 'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg';

    case '서울':
      return 'https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg';

    default:
      return 'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg';
  }
};
export const teamnametoFullname = (teamname: string) => {
  switch (teamname) {
    case '강원':
      return '강원FC';

    case '광주':
      return '광주FC';

    case '대구':
      return '대구FC';

    case '대전':
      return '대전하나시티즌';

    case '수원':
      return '수원삼성블루윙즈';

    case '수원FC':
      return '수원FC';

    case '울산':
      return '울산현대';

    case '인천':
      return '인천유나이티드';

    case '전북':
      return '전북현대모터스';

    case '제주':
      return '제주유나이티드';

    case '포항':
      return '포항스틸러스';

    case '서울':
      return 'FC서울';
  }
};
export const teamidConvertImg = (teamId: number) => {
  switch (teamId) {
    case 1:
      return 'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg';

    case 2:
      return 'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg';

    case 3:
      return 'https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg';

    case 4:
      return 'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg';

    case 5:
      return 'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg';
    case 6:
      return 'https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg';
    case 7:
      return 'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg';

    case 8:
      return 'https://kickstorage.blob.core.windows.net/logo/jeju_united.svg';
    case 9:
      return 'https://kickstorage.blob.core.windows.net/logo/incheon_united.svg';
    case 10:
      return 'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg';
    case 11:
      return 'https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg';

    case 12:
      return 'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg';
  }
};
export const teamnameConvertteamId = (teamname: string) => {
  switch (teamname) {
    case '강원':
      return 1;

    case '광주':
      return 2;

    case '대구':
      return 3;

    case '대전':
      return 4;

    case '수원':
      return 5;

    case '수원FC':
      return 11;

    case '울산':
      return 10;

    case '인천':
      return 9;

    case '전북':
      return 12;

    case '제주':
      return 8;

    case '포항':
      return 7;

    case '서울':
      return 6;
  }
};

export const teamidConvertStadium = (teamId: number | undefined) => {
  switch (teamId) {
    case 1:
      return '강릉종합경기장';

    case 2:
      return '광주축구전용구장';

    case 3:
      return 'DGB대구은행파크';

    case 4:
      return '대전월드컵경기장';

    case 5:
      return '수원월드컵경기장';
    case 6:
      return '서울월드컵경기장';
    case 7:
      return '포항스틸야드';

    case 8:
      return '제주월드컵경기장';
    case 9:
      return '인천축구전용경기장';
    case 10:
      return '울산문수축구경기장';
    case 11:
      return '수원종합운동장';

    case 12:
      return '전주월드컵경기장';
  }
};
export const teamidConverttoTeamName = (teamId: number | undefined) => {
  switch (teamId) {
    case 1:
      return '강원FC';

    case 2:
      return '광주FC';

    case 3:
      return '대구FC';

    case 4:
      return '대전하나시티즌';

    case 5:
      return '수원월삼성블루윙즈';
    case 6:
      return 'FC서울';
    case 7:
      return '포항스틸러스';

    case 8:
      return '제주유나이티드';
    case 9:
      return '인천유나이티드';
    case 10:
      return '울산현대';
    case 11:
      return '수원FC';

    case 12:
      return '전북현대모터스';
  }
};
