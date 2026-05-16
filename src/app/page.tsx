import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import ExhibitionPreviews from "@/components/ExhibitionPreviews";
import MintingInterface from "@/components/MintingInterface";
import VerticalTabs from "@/components/ui/vertical-tabs";

export default function Home() {
  return (
    <>
      <Hero />
      <VerticalTabs />
      <Collections />
      <ExhibitionPreviews />
      <MintingInterface />
    </>
  );
}
