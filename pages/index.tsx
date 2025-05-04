import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

export default function Home() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="Home" />
    </PlasmicRootProvider>
  );
}