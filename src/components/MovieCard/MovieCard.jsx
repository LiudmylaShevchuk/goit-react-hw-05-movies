import { Container, Img, Wrapper, Title, Description, Year, Text } from './MovieCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } = movie;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres.map(ganre => ganre.name).join(', ');

    return (
        <Container>
            <Img src={imgUrl} alt="{title}" width="350" />
            <Wrapper>
                <Title>
                    {title} <Year>({ releaseDate})</Year>
                </Title>
                <Description>
                    User score: <Text>{ voteScore}</Text>
                </Description>
                <Description>
                    Overview: <Text>{ overview}</Text>
                </Description>
                <Description>
                    Genres: <Text>{ genresList}</Text>
                </Description>
            </Wrapper>
        </Container>
    );
 };


MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
    })
};