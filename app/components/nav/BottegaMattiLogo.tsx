import type { FC } from "react"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import logoSvgRaw from "~/assets/logo.svg?raw"

type LogoProps = {
	className?: string
	width?: string | number
	height?: string | number
}

const BottegaMattiLogo: FC<LogoProps> = ({ className = "", width, height, ...props }) => {
	const { t } = useTranslation()

	const svgMarkup = useMemo(() => {
		const svgWithoutXml = logoSvgRaw.replace(/<\?xml[^>]*\?>\s*/, "")
		const titleMarkup = `<title>${t("pageTitle")}</title>`

		return svgWithoutXml.replace(/<svg([^>]*)>/, (_match, attrs) => {
			const classAttr = className ? ` class="${className}"` : ""
			const widthAttr = width != null ? ` width="${width}"` : ""
			const heightAttr = height != null ? ` height="${height}"` : ""

			return `<svg${attrs}${classAttr}${widthAttr}${heightAttr}>${titleMarkup}`
		})
	}, [className, height, t, width])

	return <span dangerouslySetInnerHTML={{ __html: svgMarkup }} {...props} />
}

export default BottegaMattiLogo
