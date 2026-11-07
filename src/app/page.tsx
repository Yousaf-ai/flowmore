import { HomeExperience, type HomePlatform } from "@/components/home-experience";
import { isChinesePlatform, platforms } from "@/content/platforms";

export default function HomePage() {
  const cards: HomePlatform[] = platforms.map((platform) => ({
    id: platform.id,
    name: platform.name,
    vendor: platform.vendor ?? "",
    tagline: platform.tagline,
    ecosystem: isChinesePlatform(platform.id) ? "chinese" : "western",
  }));

  return <HomeExperience platforms={cards} />;
}
