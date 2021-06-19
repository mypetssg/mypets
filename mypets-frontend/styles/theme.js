import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from "@chakra-ui/react"

const fonts = {
    ...chakraTheme.fonts,
    // futura: "Futura",
    // gothamrnd: "GothamRnd",
    heading: `Futura`,
    body: `GothamRnd`
}

const colors = {
    ...chakraTheme.colors,
    mypets: {
        100: "#ffc400",
        200: "#ffc400",
        300: "#ffc400",
        400: "#ffc400",
        500: "#ffc400",
        600: "#ffc400",
        700: "#ffc400",
        800: "#ffc400",
        900: "#ffa000",
    }
}

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  }

const overrides = {
    ...chakraTheme,
    fonts,
    colors,
    config
}

const customTheme = extendTheme(overrides)

export default customTheme