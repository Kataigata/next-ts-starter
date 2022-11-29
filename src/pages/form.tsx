import { ExampleForm } from 'src/components/ExampleForm/ExampleForm';
import Head from 'next/head';

export default function Form() {
	return (
		<div>
			<Head>
				<title>React Hooks Form Example</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<ExampleForm />
			</main>
		</div>
	);
}

