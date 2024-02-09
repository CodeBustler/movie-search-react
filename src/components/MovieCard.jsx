import React from "react";
import imgPlace from "../assets/img.png";
function MovieCard({ allMovieData, loading }) {
	return (
		<div>
			{loading ? (
				<div className="d-flex justify-content-center my-5">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<div className="card-container">
					{allMovieData ? (
						allMovieData.map((movie, index) => {
							const hasPoster =
								movie.Poster && movie.Poster !== "N/A";
							return (
								<div
									key={index}
									className="card"
									style={{ width: "18rem" }}
								>
									<img
										src={
											hasPoster ? movie.Poster : imgPlace
										}
										className="card-img-top"
										alt="img"
									/>
									<div className="card-body">
										<h5 className="card-title">
											{movie.Title.slice(0, 50)}
										</h5>
										<p className="card-text">
											Year : {movie.Year}
										</p>
									</div>
								</div>
							);
						})
					) : (
						<h2 className="no-data">No Data</h2>
					)}
				</div>
			)}
		</div>
	);
}

export default MovieCard;
