import { useRouter } from "next/router";

const BackendPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return <p>backend: {slug}</p>;
};

export default BackendPage;
