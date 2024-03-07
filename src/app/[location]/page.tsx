import HomeButton from "@/components/Homebutton"
import { getForecast } from "@/utils/getForecast"

type Props = {
	params: {
		location: string
	}
}

export default async function Detail({  params }: Props) {
	const name = params.location === 'seoul' ? '서울' : ''

	// const res = await getForecast()
	return(
		<>
			<h1>{name}의 예보</h1>
			<HomeButton />
		</>
	)
}