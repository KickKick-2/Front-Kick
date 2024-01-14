export const sliceTitle = (title: string) => {
  if (title.length > 20) {
    const nowtitle = title.slice(0, 20);
    const returnTitle = nowtitle + '...';
    return returnTitle;
  }
  return title;
};

export const sliceDate = (date: string) => {
  return date.split('오')[0];
};

export const replaceNowStatus = (nowstatus: number) => {
  if (nowstatus === 0) {
    return '모집중';
  } else if (nowstatus === 1) {
    return '모집완료';
  } else {
    return '모집종료';
  }
};
