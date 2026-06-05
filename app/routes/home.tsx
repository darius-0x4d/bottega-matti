import type { JSX } from "react"
import { useTranslation } from "react-i18next"
import food from "~/assets/food.png"
import BottegaMattiLogo from "~/components/nav/BottegaMattiLogo"
import SubSection from "~/components/sub-section/sub-section"
import { TypographyButton, TypographyP } from "~/components/typography/typography-h2"

export function meta() {
	const { t } = useTranslation()
	return [{ title: t("pageTitle") }, { name: "description", content: t("pageDescription") }]
}

const valuesListItem = (valueTitle: string, valueDescription: string): JSX.Element => {
	return (
		<div key={valueDescription}>
			<p className="text-lg leading-8 [&:not(:first-child)]:mt-6">
				<span className="font-semibold text-lg italic">{valueTitle}</span>
				{valueDescription}
			</p>
		</div>
	)
}

const addressAndHours = (): JSX.Element => {
	return (
		<>
			<div className="my-6 list-disc [&>li]:mt-2 [&>li]:pb-6">
				<p>
					<span className="font-semibold text-lg">Address:</span> Cra. 4 #11-88, Bogotá, Colombia
				</p>
			</div>
			<div className="">
				<p className="font-semibold text-lg">Hours</p>
				<ul className="my-1 ml-6 list-disc [&>li]:mt-1">
					<li>
						<span className="font-bold">Monday:</span> 12:00 PM - 8:30 PM
					</li>
					<li>
						<span className="font-bold">Tuesday:</span> Closed
					</li>
					<li>
						<span className="font-bold">Wednesday - Saturday:</span> 12:00 PM - 8:30 PM
					</li>
					<li>
						<span className="font-bold">Sunday & All Holidays:</span> 12:00 PM - 5:00 PM
					</li>
				</ul>
			</div>
		</>
	)
}

export default function Index() {
	const { t } = useTranslation()
	const purposeTitle = t("purposeTitle")
	const purposeDescription = t("purposeDescription")
	const _purposeContent = TypographyP(purposeDescription)

	const valuesTitle = t("valuesTitle")
	const valuesKeys = [
		{ title: t("valuesStewardship.title"), description: t("valuesStewardship.description") },
		{ title: t("valuesIntegrity.title"), description: t("valuesIntegrity.description") },
		{ title: t("valuesQuality.title"), description: t("valuesQuality.description") },
	]
	const _valuesContent: JSX.Element[] = valuesKeys.map((valueskey) => {
		return valuesListItem(valueskey.title, valueskey.description)
	})

	return (
		<div className="flex flex-col">
			<BottegaMattiLogo className="w-full max-w-[400px] self-center pt-6 pb-8" />
			<div className="mx-auto max-w-4xl text-center">
				<img src={food} alt="Bottega Matti Food" className="mx-auto h-auto w-full max-w-sm rounded-lg" />
			</div>
			<SubSection title={purposeTitle} content={TypographyButton()} />
			<SubSection title={valuesTitle} content={addressAndHours()} />
		</div>
	)
}
