import Head from 'next/head';

import { EAppTitle } from 'types/appTitle.types';

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>{EAppTitle.MAIN}</title>
            </Head>
        </>
    );
}
