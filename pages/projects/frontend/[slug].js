import { useRouter } from "next/router";

const FrontendPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return <p>Frontend: {slug}</p>;
};

export default FrontendPage;
