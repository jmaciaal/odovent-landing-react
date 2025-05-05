import Head from "next/head";
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

export default function Home() {
  return (
    <>
      <Head>
        <title>Odovent Depósito Dental | Suministros para dentistas en Mexicali</title>
        <meta name="description" content="Venta de insumos dentales en Mexicali. Resinas, anestesias y kits para estudiantes. Atención rápida y precios preferenciales." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Odovent Depósito Dental" />
        <meta property="og:description" content="Suministros para odontólogos y estudiantes en Mexicali." />
        <meta property="og:image" content="https://odovent-landing.vercel.app/og-image.jpg" />
        <meta name="author" content="Odovent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PlasmicRootProvider loader={PLASMIC}>
        <PlasmicComponent component="Home" />
      </PlasmicRootProvider>
    </>
  );
}
