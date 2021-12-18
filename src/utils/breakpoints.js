const size = {
    xsm: '360px',
    sm: '560px',
    md: '810px',
    lg: '1299px',
    xlg:'1300px',
    aux: '1129px'
}

export const breakpoints = {
    sm: `(max-width: ${size.sm})`,
    xsm: `(max-width: ${size.xsm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(min-width: ${size.xlg})`,
    aux: `(max-width: ${size.aux})`,
}  
