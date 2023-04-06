import Head from 'next/head'
import { Text, Button, Spacer } from '@nextui-org/react'
import { useState } from 'react'

export default function Home() {
	const [caption, setCaption] = useState("")

	const getCaption = async () => {
		await fetch("https://binaryjazz.us/wp-json/genrenator/v1/story/")
			.then(async (response) => await response.json())
			.then(result => setCaption(result))
	}

	return (
		<>
			<Head>
				<title> caption genrerator </title>
				<meta name="description" content="made with genrerator api" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
			<Text b size={18}> {caption} </Text>
				<Spacer/>
				<Button onPress={getCaption}> generate </Button>
			</main>
			<footer>
				<p> {"made with  ♡ ♥ by ennoza, with genrerator api"} </p>
			</footer>
		</>
	)
}
