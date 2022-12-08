import '../styles/base.css';
import '../styles/utils.css';

import type { AppProps } from 'next/app';
import SomethingIsPlayingContext from 'src/components/Context';
import { useRef, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const [context, setContext] = useState(false);
	const [time, setTime] = useState(0);
	const [monster, setMonster] = useState('');
	const [monsterTwo, setMonsterTwo] = useState('');
	const [monsterThree, setMonsterThree] = useState('');
	const [monsterFour, setMonsterFour] = useState('');
	const [bassMuted, setBassMuted] = useState(true);
	const [drumsMuted, setDrumsMuted] = useState(true);
	const [otherMuted, setOtherMuted] = useState(true);
	const [vocalsMuted, setVocalsMuted] = useState(true);

	return (
		<SomethingIsPlayingContext.Provider
			value={[
				context,
				setContext,
				time,
				setTime,
				monster,
				setMonster,
				monsterTwo,
				setMonsterTwo,
				monsterThree,
				setMonsterThree,
				monsterFour,
				setMonsterFour,
				bassMuted,
				setBassMuted,
				drumsMuted,
				setDrumsMuted,
				otherMuted,
				setOtherMuted,
				vocalsMuted,
				setVocalsMuted,
			]}
		>
			<Component {...pageProps} />
		</SomethingIsPlayingContext.Provider>
	);
}
