import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import PropTypes from "prop-types";
import Message from "./Message";
import { flagemojiToPNG } from "./Helpers";

CountryList.propTypes = {
    cities: PropTypes.array,
    isLoading: PropTypes.bool,
};

function CountryList({ cities, isLoading }) {
    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
            <Message message="Add your first city by clicking on a city on the map" />
        );

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
            return [
                ...arr,
                { country: city.country, emoji: flagemojiToPNG(city.emoji) },
            ];
        else return arr;
    }, []);

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem country={country} key={country.country} />
            ))}
        </ul>
    );
}

export default CountryList;
