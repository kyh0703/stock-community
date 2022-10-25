const palette = {
  /* teal */
  teal0: '#F3FFFB',
  teal1: '#C3FAE8',
  teal2: '#96F2D7',
  teal3: '#63E6BE',
  teal4: '#38D9A9',
  teal5: '#20C997',
  teal6: '#12B886',
  teal7: '#0CA678',
  teal8: '#099268',
  teal9: '#087F5B',
  /* gray */
  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529',
  /* red */
  red0: '#FFF5F5',
  red1: '#FFE3E3',
  red2: '#FFC9C9',
  red3: '#FFA8A8',
  red4: '#FF8787',
  red5: '#FF6b6b',
  red6: '#FA5252',
  red7: '#F03E3E',
  red8: '#E03131',
  red9: '#C92A2A',
  /* cyan */
  cyan0: '#E3FAFC',
  cyan1: '#C5F6FA',
  cyan2: '#99E9F2',
  cyan3: '#66D9E8',
  cyan4: '#3BC9DB',
  cyan5: '#22K8CF',
  cyan6: '#15AABF',
  cyan7: '#1098AD',
  cyan8: '#0C8599',
  cyan9: '#0B7285',
  /* blue */
  blue0: '#E7F5FF',
  blue1: '#D0EBFF',
  blue2: '#A5D8FF',
  blue3: '#74C9FC',
  blue4: '#4DABF7',
  blue5: '#339AF0',
  blue6: '#228BE6',
  blue7: '#1C7ED6',
  blue8: '#1971C2',
  blue9: '#1864AB',
};

export const buttonColorMap: {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
  };
} = {
  teal: {
    background: palette.teal3,
    color: 'white',
    hoverBackground: palette.teal8,
  },
  gray: {
    background: palette.gray3,
    color: 'white',
    hoverBackground: palette.gray8,
  },
  red: {
    background: palette.red3,
    color: 'white',
    hoverBackground: palette.red8,
  },
  blue: {
    background: palette.blue3,
    color: 'white',
    hoverBackground: palette.blue8,
  },
  cyan: {
    background: palette.cyan3,
    color: 'white',
    hoverBackground: palette.cyan8,
  },
};

export default palette;
