import type { NextPageContext } from "next";

export default function CDefault() {
  return <span>{""}</span>;
}

export async function getServerSideProps(context: NextPageContext) {
  const shortUrlId = context.query.url as string;
  const baseUrl = process.env.BASE_URL as string;

  const dns = await import("node:dns");
  dns.setDefaultResultOrder("ipv4first");

  const urlToFetch = new URL(
    baseUrl + `/api/shortlink/get?shortUrl=` + shortUrlId[0]
  );

  let { getUrl } = await fetch(urlToFetch, {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error("Error in get URL:", error);
    });

  if (!getUrl.match(/^https?:\/\//)) {
    getUrl = "http://" + getUrl;
  }

  return {
    redirect: {
      destination: getUrl ?? "/",
      permanent: true,
    },
  };
}
