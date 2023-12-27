import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { countryFetchData } from '../redux/actions/weatherActions';
import './ShowingHystory.css';

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  return (
    <nav class="navbar navbar-dark bg-dark  text-bg-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-bg-dark" href="#">
          Weather App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-bg-dark"></span>
        </button>
        <div
          class="collapse navbar-collapse bg-dark  mt-2"
          id="navbarSupportedContent"
        >
          <form class="d-flex" role="search">
            <input
              className=" form-control me-2"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-bg-dark"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch(countryFetchData(search));
              }}
            >
              weatherDetails
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
