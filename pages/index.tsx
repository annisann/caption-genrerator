import Head from 'next/head'
import { Text, Button, Spacer } from '@nextui-org/react'
import { useState } from 'react'
import confetti from 'canvas-confetti'

//   const handleConfetti = () => {
//     confetti();
//   };


export default function Home() {
	const [caption, setCaption] = useState("")

	const getCaption = async () => {
		confetti()
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
				<Text b size={22}> {caption} </Text>
				<Spacer />
				<Button
					auto
					bordered
					color={"gradient"}
					onPress={getCaption}> generate </Button>
			</main>
			<footer>
				<p>
					{"♡ ennoza, with "}
					<a href="https://binaryjazz.us/genrenator-api/">
						genrerator api
					</a>
				</p>
			</footer>
		</>
	)
}
