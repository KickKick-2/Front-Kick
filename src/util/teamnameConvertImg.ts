export const teamnameConvertImg = (teamname: string) => {
  switch (teamname) {
    case '강원':
      return 'public/assets/TeamLogo/강원FC.png';

    case '광주':
      return 'public/assets/TeamLogo/광주FC.png';

    case '대구':
      return 'public/assets/TeamLogo/대구FC.png';

    case '대전':
      return 'public/assets/TeamLogo/대전하나시티즌.png';

    case '김천':
      return 'public/assets/TeamLogo/김천상무.png';

    case '수원FC':
      return 'public/assets/TeamLogo/수원FC.png';

    case '울산':
      return 'public/assets/TeamLogo/울산HD.png';

    case '인천':
      return 'public/assets/TeamLogo/인천유나이티드.png';

    case '전북':
      return 'public/assets/TeamLogo/전북현대모터스.png';

    case '제주':
      return 'public/assets/TeamLogo/제주유나이티드.png';

    case '포항':
      return 'public/assets/TeamLogo/포항스틸러스.png';

    case '서울':
      return 'public/assets/TeamLogo/FC서울.png';

    default:
      return 'public/assets/TeamLogo/강원FC.png';
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

    case '김천':
      return '김천상무FC';

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
      return 'public/assets/TeamLogo/강원FC.png';

    case 2:
      return 'public/assets/TeamLogo/광주FC.png';

    case 3:
      return 'public/assets/TeamLogo/김천상무.png';

    case 4:
      return 'public/assets/TeamLogo/대구FC.png';
    case 5:
      return 'public/assets/TeamLogo/대전하나시티즌.png';
    case 6:
      return 'public/assets/TeamLogo/FC서울.png';

    case 7:
      return 'public/assets/TeamLogo/수원FC.png';
    case 8:
      return 'public/assets/TeamLogo/울산HD.png';
    case 9:
      return 'public/assets/TeamLogo/인천유나이티드.png';
    case 10:
      return 'public/assets/TeamLogo/전북현대모터스.png';

    case 11:
      return 'public/assets/TeamLogo/제주유나이티드.png';
    case 12:
      return 'public/assets/TeamLogo/포항스틸러스.png';
  }
};
export const teamnameConvertteamId = (teamname: string) => {
  switch (teamname) {
    case '강원':
      return 1;

    case '광주':
      return 2;

    case '김천':
      return 3;

    case '대구':
      return 4;
    case "대전":
      return 5;

    case '서울':
      return 6;
    case '수원FC':
      return 7;

    case '울산':
      return 8;

    case '인천':
      return 9;

    case '전북':
      return 10;

    case '제주':
      return 11;

    case '포항':
      return 12;

  }
};

export const teamidConvertStadium = (teamId: number | undefined) => {
  switch (teamId) {
    case 1:
      return '강릉종합경기장';

    case 2:
      return '광주축구전용구장';
    case 3:
      return "김천종합운동장"
    case 4:
      return 'DGB대구은행파크';

    case 5:
      return '대전월드컵경기장';

    case 6:
      return '서울월드컵경기장';
    case 7:
      return '수원종합운동장';
    case 8:
      return '울산문수축구경기장';
      case 9:
     return '인천축구전용경기장';
    case 10:
      return '전주월드컵경기장';
    case 11:
      return '제주월드컵경기장';
    case 12:
      return '포항스틸야드';







  }
};
export const teamidConverttoTeamName = (teamId: number | undefined) => {
  switch (teamId) {
    case 1:
      return '강원FC';

    case 2:
      return '광주FC';
    case 3:
      return "김천상무FC"
    case 4:
      return '대구FC';

    case 5:
      return '대전하나시티즌';

    case 6:
      return 'FC서울';
    case 7:
      return '수원FC';
    case 8:
      return '울산HDFC';
      case 9:
     return '인천유나이티드';
    case 10:
      return '전북현대모터스';
    case 11:
      return '제주유나이티드';
    case 12:
      return '포항스틸러스';
  }
};
