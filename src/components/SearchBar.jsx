import React from "react";

function SearchBar({ searchMovie, setSearchMovie, fetchMovieData }) {
	return (
		<div className="searchBox">
			<input
				type="text"
				placeholder="Search here"
				value={searchMovie}
				onChange={(e) => {
					setSearchMovie(e.target.value);
				}}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						fetchMovieData();
					}
				}}
				autoFocus
			/>
			<button onClick={fetchMovieData}>
				<i className="fa-solid fa-magnifying-glass"></i>
			</button>
		</div>
	);
}

export default SearchBar;
