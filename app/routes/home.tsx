import { IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp } from "@tabler/icons-react"
import { type JSX, useEffect, useState } from "react"
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
					<span className="font-semibold text-lg">Address:</span> Cra. 4 #11-88, La Candelaria, Bogotá, Cundinamarca,
					Colombia
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

const PhoneLink = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [copied, setCopied] = useState(false)
	const phoneNumber = "+57 315 2235301"
	const rawPhoneNumber = "573152235301"

	useEffect(() => {
		setIsMobile(/Mobi|Android/i.test(navigator.userAgent))
	}, [])

	const handleDesktopClick = () => {
		navigator.clipboard.writeText(phoneNumber).then(() => {
			setCopied(true)
			setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
		})
	}

	if (isMobile) {
		return (
			<a
				href={`https://wa.me/${rawPhoneNumber}`}
				className="flex items-center space-x-2 text-lg leading-7 hover:underline"
			>
				<IconBrandWhatsapp size={24} />
				<span>{phoneNumber}</span>
			</a>
		)
	}

	return (
		<button
			type="button"
			onClick={handleDesktopClick}
			className="flex items-center space-x-2 text-lg leading-7 hover:underline"
		>
			<IconBrandWhatsapp size={24} />
			<span>{copied ? "Copied!" : phoneNumber}</span>
		</button>
	)
}

const socialMediaLinks = (): JSX.Element => {
	return (
		<div className="flex max-w-md flex-col">
			<div className="mt-6">
				<PhoneLink />
			</div>

			<a
				href="https://www.instagram.com/bottegamatti/"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-6 flex items-center space-x-2 text-lg leading-7 hover:underline"
			>
				<IconBrandInstagram size={24} />
				<span>bottegamatti</span>
			</a>

			<a
				href="https://www.tiktok.com/@bottega.matti"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-6 flex items-center space-x-2 text-lg leading-7 hover:underline"
			>
				<IconBrandTiktok size={24} />
				<span>bottega.matti</span>
			</a>
		</div>
	)
}

export default function Index() {
	const { t } = useTranslation()
	const purposeTitle = t("purposeTitle")
	const purposeDescription = t("purposeDescription")
	const _purposeContent = TypographyP(purposeDescription)

	const valuesTitle = t("valuesTitle")
	const followUs = "Follow Us"
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
			<SubSection title={followUs} content={socialMediaLinks()} />
		</div>
	)
}
