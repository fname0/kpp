import Head from "next/head";

const Seo = ({title, keywords, description}) => {
    return ( 
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, shrink-to-fit=no"></meta>
        <meta property="og:title" content={title} />
        <meta property="og:image" content="/kamazTestAva.png" />
        <meta name='description' content={description}/>
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="https://kpp116.ru/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/favicon.ico"/>
    </Head>
     );
}
export default Seo;