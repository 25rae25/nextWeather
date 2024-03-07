type Props = {
	params: {
		location: string
	}
}

export default function Detail({  params }: Props) {
	const name = params.location === 'seoul' ? '서울' : ''

	return(
		<>
			<h1>{name}의 예보</h1>
		</>
	)
}