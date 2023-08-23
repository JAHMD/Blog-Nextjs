import Image from "next/image";

const ProfilePic = () => {
	return (
		<section>
			<Image
				className="rounded-full border-4 border-primary-border h-52 w-52 object-cover mx-auto my-0"
				src="/images/IMG_20210707_140555.JPG"
				alt="user profile image"
				width={600}
				height={600}
				priority={true}
			/>
		</section>
	);
};

export default ProfilePic;
