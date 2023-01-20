//Theme holds all the values needed for the design
export const theme = {
  colors: {
    primaryBlue:'hsla(207,71%,36%,1)',
    pBlueShade:'hsla(206,46%,47%,1)',
    secondaryBlue:'hsla(208,68%,25%,1)',
    sBlueShade:'hsla(208,46%,35%,1)',
    accentGreen:'hsla(87,32%,44%,1)',
    aGreenShade:'hsla(87,25%,55%,1)',
    errorRed:'hsla(360,97%,59%,1)',
    links:'hsla(87,26%,66%,1)',
    black:'#0C0C0C',
    darkGrey:'#333333',
    lightGrey:'#828282',
    whiteGrey:'#F2F2F2',
    white:'#FFFFFF'
  },
  fonts:{
    display:'active, sans-serif',
    reading:'poppins, sans-serif',
    mono:'fira-mono,monospace'
  },
  fontSize:{
    giga:'5.938rem',
    mega:'4.750rem',
    kilo:'3.812rem',
    h1:'3.062rem',
    h2:'2.438rem',
    h3:'1.938rem',
    h4:'1.562rem',
    h5:'1.250rem',
    milli:'1.125rem',
    micro:'1rem',
    nano:'.812rem'
  },
  fontWeight: {
    regular:'400',
    medium:'500',
    bold:'700'
  },
  lineHeight:{
    wide:'1.3',
    normal:'1.2',
    tight:'1.05'
  },
  letterSpacing:{
    wide:'.5px',
    normal:'.3px',
    tight:'.225px' 
  },
  fontCasing: {
    upper:'uppercase',
    capitals:'capitalize'
  },
  grid: {
    desktop:'minmax(8em,1fr)minmax repeat(12,minmax(auto,9em)) (8em,1fr)',
    largeTablet:'minmax(6em,auto) repeat(8,minmax(auto,6em)) minmax(6em,auto)',
    tablet:'minmax(4em,auto) repeat(6,minmax(auto,6em)) minmax(4em,auto)',
    mobile:'minmax(2em,auto) repeat(4,minmax(auto,4em)) minmax(2em,auto)'
  },
  gridGap:{
    wide:'2em',
    normal:'1em',
    tight:'.5em'
  },
  flexGap:{
    wide:'3em',
    normal:'2em',
    tight:'1em',
  },
  spacing:{
    xxl:'4em',
    large:'3em',
    medium:'2em',
    small:'1.5em',
    tight:'1em'
  },
  buttonPadding:{
    large:'1.5em 2em',
    small:'1em 1.5em'
  },
  sizes: {
    largedesktop:'only screen and (min-width:1920px)',
    desktop:'only screen and (max-width:1920px)',
    largetablet:'only screen and (max-width:1024px)',
    tablet:'only screen and (max-width:744px)',
    mobile:'only screen and (max-width:430px)',
    hover:'(hover:hover)',
    nohover:'(hover:none)'
  },
}