import style from './home.module.css'
import RevalidateButton from "@/components/RevalidateButton";
import CurrentWeatherItem from "@/components/CurrentWeatherItem";


export default async function Home() {
	const cities = [
		{ name: '서울', code: 'seoul' },
		{ name: '뉴욕', code: 'NYC' },
		{ name: '런던', code: 'london' },
	]

	return (
		<>
			<div className={style.container}>
				<h1 className={style.title}>날씨앱</h1>
				<div className={style.button_wrap}>
				<RevalidateButton tag={'time'} />
				</div>
				<ul className={style.list}>
					{cities.map((city) => {
						return(
							<CurrentWeatherItem 
								key={city.code}
								cityCode={city.code}
								cityName={city.name}
							/>
						)
					})}
				</ul>
			</div>
		</>
	);
}
