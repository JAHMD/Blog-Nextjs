"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RefreshBtn = ({ path }: { path: string }) => {
	const router = useRouter();

	const [clicks, setClicks] = useState<number>(3);
	const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

	const handleClick = async () => {
		if (clicks > 0) {
			try {
				setClicks((curr) => curr - 1);
				const res = await fetch(
					`/api/revalidate?path=/${path}&secret=${process.env.MY_SECRET_TOKEN}`,
					{ method: "POST" }
				);
				const data = await res.json();
				router.refresh();

				if (!data.revalidate) {
					alert("Too many requests. You can refresh again after 1 min");
					setBtnDisabled(true);
					setClicks(0);
				}
			} catch (error: any) {
				alert(error.message);
			}
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
