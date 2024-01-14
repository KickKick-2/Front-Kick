type Props = {};

const Icon_checked = (props: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='9.35' stroke='#C4C4C4' strokeWidth='1.3' />
      <g clipPath='url(#gxufjr4bqa)'>
        <g filter='url(#4xtt2agx5b)'>
          <circle cx='12' cy='12' r='10' fill='#1f1f45' />
        </g>
        <path
          d='m16 9-5.082 6L8 11.555'
          stroke='#fff'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='gxufjr4bqa'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
        <filter
          id='4xtt2agx5b'
          x='-2'
          y='-1'
          width='28'
          height='28'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0' />
          <feBlend
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1740_7915'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_1740_7915'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Icon_checked;
