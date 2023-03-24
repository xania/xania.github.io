﻿import '@xania/view';
import { DemoContainer } from './DemoContainer';

export function HelloWorld(props: { name }) {
	console.log(props);
	const { name } = props;
	return (
		<DemoContainer>
			<button click={() => console.log(`hello ${name}!`)}>Say hello</button>
		</DemoContainer>
	);
}