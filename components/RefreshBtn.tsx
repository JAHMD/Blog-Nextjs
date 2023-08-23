"use client";

import { useEffect, useState } from "react";

const RefreshBtn = ({ page }: { page: string }) => {
	const [clicks, setClicks] = useState<number>(3);
	const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

	const handleClick = async () => {
		if (clicks > 0) {
			try {
				setClicks((curr) => curr - 1);
				await fetch(
					`/api/revalidate?path=/${page}&secret=d9a85ee4ae4c0ed3fc0505622042b3a213e9700eab4f9f`,
					{ method: "POST" }
				).then((res) => res.json());
			} catch (error: any) {
				alert(error.message);
			}
		} else {
			alert("Too many requests!");
			setBtnDisabled(true);
			setClicks(0);
		}
	};

	useEffect(() => {
		if (btnDisabled) {
			setInterval(() => {
				setBtnDisabled(false);
				setClicks(3);
			}, 60000);
		}
	}, [btnDisabled]);

	return (
		<button
			disabled={btnDisabled}
			className="ml-auto w-fit bg-white disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-white hover:bg-white/80 transition-colors text-black py-1.5 px-2.5 rounded-lg text-sm font-medium"
			onClick={handleClick}
		>
			Refresh
		</button>
	);
};

export default RefreshBtn;
