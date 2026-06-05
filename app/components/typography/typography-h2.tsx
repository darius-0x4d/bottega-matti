import { t } from "i18next"
import type { JSX } from "react"
import menuPdf from "~/assets/m6.pdf"
import { Link } from "~/library/link/link"
import { Button } from "../ui/button"

export function TypographyH2(sectionTitle: string): JSX.Element {
	return (
		<h2 className="scroll-m-20 border-b pt-8 pb-2 font-semibold text-3xl tracking-tight first:mt-0">{sectionTitle}</h2>
	)
}

export function TypographyH4(sectionTitle: string) {
	return <h4 className="scroll-m-20 font-semibold text-xl tracking-tight">{sectionTitle}</h4>
}

export function TypographyLarge(text: string) {
	return <div className="font-semibold text-lg">{text}</div>
}

export function TypographyLargeItalic(text: string) {
	return <div className="font-semibold text-lg italic">{text}</div>
}

export const TypographyP = (paragraphText: string) => {
	return <p className="text-lg leading-8 [&:not(:first-child)]:mt-6">{paragraphText}</p>
}

export function TypographyListText(listItems: string[]): JSX.Element {
	return (
		<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
			{listItems.map((listItem) => {
				return <li key={listItem}>{listItem}</li>
			})}
		</ul>
	)
}

export function TypographyListContent(listItems: JSX.Element[]): JSX.Element {
	return (
		<ul className="my-6 ml-6 list-disc [&>li]:mt-2 [&>li]:pb-6">
			{listItems.map((listItem) => {
				return <li key={listItem?.key}>{listItem}</li>
			})}
		</ul>
	)
}

export function TypographyButton(): JSX.Element {
	const linkToMenu = menuPdf
	return (
		<div>
			<p>View our menu</p>
			<div className="flex justify-center pt-8">
				<Button asChild size={"lg"}>
					<a href={linkToMenu} download="Bottega_Matti_Menu.pdf">
						{t("navigation.view_menu")}
					</a>
				</Button>
			</div>
		</div>
	)
}

export function TypographyListParagraphContent(): JSX.Element {
	return (
		<>
			<div className="ml-6 list-disc [&>li]:mt-2">
				<p>Address: Cra. 4 #11-88, Bogotá, Colombia</p>
			</div>
			<div className="">
				<p>Hours</p>
				<ul className="my-6 ml-6 list-disc [&>li]:mt-2 [&>li]:pb-6">
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
