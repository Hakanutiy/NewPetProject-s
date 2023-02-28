import { useState } from 'react'
import { Popup } from './popup'

export const ModuleWin = () => {
	const [open, setOpen] = useState(false)
	return (
		<div className={'modulewin'}>
			<button onClick={() => setOpen(true)}>Нажми на меня!</button>
			<Popup active={open} setActive={setOpen} />
		</div>
	)
}
