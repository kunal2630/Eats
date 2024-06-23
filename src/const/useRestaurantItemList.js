import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useRestaurantItemList = (resId) => {
	const [resList, setReslist] = useState(null);
	const [coordinates, setCoordinates] = useState({
		latitude: null,
		longitude: null,
	});

	let latitude = useSelector((store) => store.cordinate.latitude);
	let longitude = useSelector((store) => store.cordinate.longitude);

	useEffect(() => {
		if (!latitude || !longitude) {
			navigator.geolocation.getCurrentPosition((position) => {
				setCoordinates({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				});
			});
		} else {
			setCoordinates({ latitude, longitude });
		}
	}, [latitude, longitude]);

	useEffect(() => {
		if (coordinates.latitude && coordinates.longitude) {
			fetchList();
		}
	}, [coordinates]);

	const fetchList = async () => {
		const baseUrl = `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${coordinates.latitude}&lng=${coordinates.longitude}&restaurantId=`;
		try {
			const list = await fetch(baseUrl + resId);
			const json = await list.json();
			setReslist(json.data);
		} catch (error) {
			console.error("Failed to fetch restaurant list:", error);
		}
	};

	return resList;
};

export default useRestaurantItemList;
