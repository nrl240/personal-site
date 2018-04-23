import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'
// import stAnnesTheme from 'typography-theme-st-annes'
fairyGateTheme.overrideThemeStyles = () => ({
  'a': {
    textDecoration: 'none',
  }
})

const typography = new Typography(fairyGateTheme)

// const typography = new Typography(stAnnesTheme)

export default typography
