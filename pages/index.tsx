import Head from 'next/head'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

export default function Home() {
	const [caption, setCaption] = useState("")

	const getCaption = async() => {
		await fetch("https://binaryjazz.us/wp-json/genrenator/v1/story/")
	}

	return (
		<>
			<Head>
				<title> caption generator the odd </title>
				<meta name="description" content="Made with NASA TechPort API" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<p> {caption} </p>
				<Button> generate </Button>
			</main>
		</>
	)
}
