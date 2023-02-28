import { useState } from 'react'

const questions = [
	{
		title: 'Почему так много откликов на джуна?',
		variants: [
			'ох уж этот скиллфактори',
			'коронавирус',
			'пресдсказание гадалки'
		],
		correct: 0
	},
	{
		title: 'Джунам щас легко?',
		variants: [
			'разбирают как горячие пирожки',
			'а кому щас легко?',
			'что такое джун...'
		],
		correct: 1
	},
	{
		title: 'В чем сила?',
		variants: [
			'в амперах',
			'в деньгах вся сила брат',
			'я вот думаю, что сила в правде'
		],
		correct: 2
	},
	{
		title: 'какое число я загадал?',
		variants: ['3456789098765', '777666555444', '23464356234'],
		correct: 1
	},
	{
		title: 'что делать если не раскрылся парашют?',
		variants: [
			'подставить под себя воду',
			'прыгнуть в сток сена',
			'проснуться'
		],
		correct: 2
	},
	{
		title: 'Как позвать Junior Frontend Разработчика?',
		variants: [
			'CSS...CSS...CSS...',
			'брат, пройти собес на Миддла хочешь?',
			'я тут баг зафиксил твой, прими pull'
		],
		correct: 0
	},
	{
		title: 'Устроюсь ли я на работу после предыдущей шутки?',
		variants: ['Вряд-ли', 'В полне возможно, что нет', 'Мы вам перезвоним!'],
		correct: 2
	}
]
export const Result = ({ correct }) => {
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>
				Вы отгадали {correct} ответа из {questions.length}
			</h2>
			<a href={'/'}>
				<button>Попробовать снова</button>
			</a>
		</div>
	)
}

export const Game = ({ step, question, onClickVariant }) => {
	const percentage = Math.round((step / questions.length) * 100)
	return (
		<>
			<div className="progress">
				<div
					style={{ width: `${percentage}%` }}
					className="progress__inner"
				></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((obj, index) => (
					<li onClick={() => onClickVariant(index)} key={obj}>
						{obj}
					</li>
				))}
			</ul>
		</>
	)
}

export const Quiz = () => {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]
	const onClickVariant = index => {
		setStep(step + 1)
		if (index === question.correct) {
			setCorrect(correct + 1)
		}
	}
	return (
		<div className="quiz">
			{step != questions.length ? (
				<Game step={step} question={question} onClickVariant={onClickVariant} />
			) : (
				<Result correct={correct} />
			)}
		</div>
	)
}
