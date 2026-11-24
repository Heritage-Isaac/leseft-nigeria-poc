export type ButtonRadius = 'sharp' | 'subtle' | 'rounded' | 'pill'
export type ColorTheme = 'navy' | 'emerald' | 'gold' | 'slate'
export type CardStyle = 'border' | 'elevated' | 'flat' | 'glass'

export interface SiteDesignConfig {
  colorTheme: ColorTheme
  buttonRadius: ButtonRadius
  cardStyle: CardStyle
  hiddenElements: {
    heroCta?: boolean
    statusBanner?: boolean
    projectBadge?: boolean
    emailDemo?: boolean
    footerNewsletter?: boolean
  }
}

export interface ChatMessage {
  id: string
  sender: 'user' | 'assistant'
  text: string
  timestamp: string
  appliedChange?: string
}

export interface SelectedElementInfo {
  id: string
  name: string
  type: 'button' | 'card' | 'section' | 'nav' | 'text'
  currentRadius?: ButtonRadius
  currentColor?: ColorTheme
  currentCardStyle?: CardStyle
  isVisible: boolean
}
