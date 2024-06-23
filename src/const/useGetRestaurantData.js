import { useEffect, useState } from "react";
import { setCordinate } from "./cordinateSlice";
import { useDispatch } from "react-redux";

const useGetRestaurantData = () => {
	const [data, setData] = useState(null);
	const [latitude, setlatitude] = useState();
	const [longitude, setlongitude] = useState();
	const dispatch = useDispatch();

	const getLocation = async () => {
		navigator.geolocation.getCurrentPosition(async (position) => {
			setlatitude(position.coords.latitude);
			setlongitude(position.coords.longitude);
		});
		dispatch(setCordinate({ latitude, longitude }));

		const resdata = await fetch(
			`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}`
		);

		const json = await resdata.json();

		setData(json);
	};

	useEffect(() => {
		getLocation();
	}, [latitude, longitude]);

	return data;
};

export default useGetRestaurantData;
