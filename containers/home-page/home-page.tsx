import Head from "next/head";
import Link from "next/link";
import styles from "./home-page.module.css";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Member List | Homepage</title>
        <meta name="keywords" content="members" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          ligula sed ex iaculis pulvinar. Vestibulum placerat mollis magna et
          placerat. Sed orci neque, imperdiet non dolor in, ornare porttitor
          tellus. Nunc in consectetur ante, et cursus tortor. Sed in dapibus
          leo, tincidunt ullamcorper est. Cras ullamcorper, velit non elementum
          suscipit, arcu sapien varius odio, eu ullamcorper odio libero non
          risus. Curabitur ut odio sit amet velit fringilla vestibulum.
          Curabitur pulvinar turpis eget dictum scelerisque. Maecenas sit amet
          eros at nunc gravida faucibus eu nec nisi. Duis ante justo, mattis sed
          hendrerit ut, dignissim eget ligula. Vivamus quis augue augue.
          Vestibulum et felis quis purus aliquam rutrum in sit amet lectus.
        </p>
        <p className={styles.text}>
          Proin viverra ligula vel quam sagittis egestas. Sed lacinia pulvinar
          nisi, non gravida diam vulputate in. Quisque eros nibh, varius sit
          amet consequat et, varius a nibh. Vivamus non ante quis nisi commodo
          feugiat. Phasellus semper ornare quam, eget vehicula nulla fringilla
          sed. Donec sit amet finibus diam. Maecenas laoreet nulla at massa
          hendrerit consequat. Quisque justo ex, congue eu ligula ut, cursus
          feugiat ante. Sed sodales sollicitudin feugiat. Sed vitae orci lectus.
          Cras efficitur tortor vel libero pharetra congue. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; In vitae justo congue, tincidunt leo non, lobortis libero.
          Aenean aliquet placerat eros, eu tempus mi lobortis in. Phasellus urna
          ligula, porta at leo ut, faucibus auctor felis. Proin pharetra commodo
          elit.
        </p>
        <Link href="/members">
          <a className={styles.btn}>See Members</a>
        </Link>
      </div>
    </>
  );
};
