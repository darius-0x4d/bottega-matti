import { IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp } from "@tabler/icons-react"
import { type JSX, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import food from "~/assets/food.png"
import BottegaMattiLogo from "~/components/nav/BottegaMattiLogo"
import SubSection from "~/components/sub-section/sub-section"
import { TypographyButton } from "~/components/typography/typography-h2"

export function meta() {
	const { t } = useTranslation()
	return [{ title: t("pageTitle") }, { name: "description", content: t("pageDescription") }]
}

const addressAndHours = (t: ReturnType<typeof useTranslation>["t"]): JSX.Element => {
	return (
		<>
			<div className="my-6 list-disc [&>li]:mt-2 [&>li]:pb-6">
				<p>
					<span className="font-bold font-cerebri text-lg">{t("addressTitle")}: </span>
					<span className="font-cerebri">Cra. 4 #11-88, La Candelaria, Bogotá, Cundinamarca, Colombia</span>
				</p>
			</div>
			<div className="">
				<p className="font-cerebri font-semibold text-lg">{t("hoursTitle")}</p>
				<ul className="my-1 ml-6 list-disc font-cerebri [&>li]:mt-1">
					<li>
						<span className="font-bold">{t("monday")}:</span> 12:00 PM - 8:30 PM
					</li>
					<li>
						<span className="font-bold">{t("tuesday")}:</span> {t("closed")}
					</li>
					<li>
						<span className="font-bold">{t("wednesdayToSaturday")}:</span> 12:00 PM - 8:30 PM
					</li>
					<li>
						<span className="font-bold">{t("sundayHolidays")}:</span> 12:00 PM - 5:00 PM
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
				<IconBrandWhatsapp size={24} className="text-[color:var(--bottega-matti-primary)]" />
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
			<IconBrandWhatsapp size={24} className="text-[color:var(--bottega-matti-primary)]" />
			<span>{copied ? "Copied!" : phoneNumber}</span>
		</button>
	)
}

const socialMediaLinks = (): JSX.Element => {
	return (
		<div className="flex max-w-md flex-col font-cerebri">
			<div className="mt-6">
				<PhoneLink />
			</div>

			<a
				href="https://www.instagram.com/bottegamatti/"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-6 flex items-center space-x-2 text-lg leading-7 hover:underline"
			>
				<IconBrandInstagram size={24} className="text-[color:var(--bottega-matti-primary)]" />
				<span>bottegamatti</span>
			</a>

			<a
				href="https://www.tiktok.com/@bottega.matti"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-6 flex items-center space-x-2 text-lg leading-7 hover:underline"
			>
				<IconBrandTiktok size={24} className="text-[color:var(--bottega-matti-primary)]" />
				<span>bottega.matti</span>
			</a>
		</div>
	)
}

export default function Index() {
	const { t } = useTranslation()
	const menuTitle = t("menuTitle")

	const findUsTitle = t("findUsTitle")
	const followUsTitle = t("followUsTitle")

	return (
		<div className="flex flex-col">
			<BottegaMattiLogo className="w-full max-w-[400px] self-center pt-6 pb-8" />
			<div className="mx-auto max-w-4xl text-center">
				<img src={food} alt="Bottega Matti Food" className="mx-auto h-auto w-full max-w-sm rounded-lg" />
			</div>
			<SubSection title={menuTitle} content={TypographyButton(t)} />
			<SubSection title={findUsTitle} content={addressAndHours(t)} />
			<SubSection title={followUsTitle} content={socialMediaLinks()} />
		</div>
	)
}
