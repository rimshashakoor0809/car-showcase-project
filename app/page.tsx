import {CustomFilter, Hero, SearchBar} from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="max-width padding-x mt-12 padding-y" id="discover">

        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars that you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>
      </div>
    </main>
  );
}
