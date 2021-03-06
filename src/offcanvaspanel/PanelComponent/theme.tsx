import * as styledComponents from 'styled-components'

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>

export interface IThemeInterface {
	offcanvasPanel: {
		backgroundColor: string
		borderRadius: string
		transitionDuration: string
		innerPadding: string
		button: {
			backgroundColor: string
			color: string
			position: string
		}
	}
}

export const theme = {
	offcanvasPanel: {
		backgroundColor: '#E3DFDA',
		borderRadius: '7px',
		transitionDuration: '0.5s',
		innerPadding: '0px',
		button: {
			backgroundColor: '#8DBFD1',
			color: '#fff',
			position: 'right',
		},
	},
}

export default styled
export { styled, css, createGlobalStyle, keyframes, ThemeProvider }
