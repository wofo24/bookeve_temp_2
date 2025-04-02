import { useRouter } from "next/router";
import Head from "next/head";

export default function SubdomainPage() {
    const router = useRouter();
    const { subdomain } = router.query;

    if (!subdomain) return <p>Loading...</p>;

    return (
        <>
            <Head>
                <title>{subdomain}.bookeve.in</title>
            </Head>
            <h1>Welcome to {subdomain}.bookeve.in</h1>
        </>
    );
}
