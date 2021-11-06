import { useContext } from "react";
import MeetupList from "../components/layout/meetups/MeetupList";

import FavoritesContext from "../store/favorites-context";

function FavouritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet! strat adding now!!</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
