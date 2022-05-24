import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import FadeIn from 'react-fade-in';

const url = 'https://ejt-livecoding-apisite-back.herokuapp.com';

export const PageBooks = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				setBooks((await axios.get(url)).data);
			})();
		}, 0);
	}, []);

	return (
		<>
			<h2>Books</h2>
			<FadeIn>
				{books.length === 0 ? (
					<div>
						<FaSpinner className="spinner" />
					</div>
				) : (
					<>
						<p>There are {books.length} books:</p>

						<div className="books">
							{books.map((book, index) => {
								return (
									<div key={index} className="book">
										<img
											src={`https://edwardtanguay.netlify.app/share/images/techBooks/${book.idCode}.jpg`}
											alt="book"
										/>
										<div className="info">
											<div className="title">
												{book.title}
											</div>
											<div className="description">
												{book.description}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</>
				)}
			</FadeIn>
		</>
	);
};
