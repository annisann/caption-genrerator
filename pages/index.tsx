import Head from 'next/head'
import { Text, Button, Spacer } from '@nextui-org/react'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { AUTHOR, DESCRIPTION, KEYWORD } from '@/lib/consts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
				<meta name="author" content={AUTHOR} />
				<meta name="description" content={DESCRIPTION} />
				<meta name="keyword" content={KEYWORD} />
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
					<a title="api source" href="https://binaryjazz.us/genrenator-api/">
						genrerator api
					</a>
					{" | "}
					<a title="repo" href="https://github.com/annisann/caption-genrerator">
					<FontAwesomeIcon icon={faGithub} style={{color: "#f7f7f7", height:"12px", width: "12px"}} />
					</a>
				</p>
			</footer>
		</>
	)
}
